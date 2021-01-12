import React, { useState, useEffect } from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import meeting from '../images/calendar.svg'
// import ServicesBumper from '../components/servicesBumper'
import Section from '../components/section'

import { encode } from '../utilities/formHelpers';

const ContactPage = (props) => {
  const [hasJS, setHasJS] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [learn, setLearn] = useState('');
  const [relationship, setRelationship] = useState('');
  const [problem, setProblem] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [hasEmptyFields, setHasEmptyFields] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formHasError, setFormHasError] = useState(false);

  useEffect(() => {
    addBodyClass();
  }, [])

  const addBodyClass = () => {
    if(typeof window !== 'undefined'){
      const body = document.body;
      body.classList.add('js');
      setHasJS(true);
    }
  }

  const postFormData = async (form) => {

    try {
      const response = await fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          name,
          email,
          phone,
          company,
          website,
          budget,
          problem,
          relationship,
          timeline,
          details,
          learn,
        })
      })

      if(response) {
        try {
          setSuccess(true);
        }catch(err) {
          console.warn(err);
          setFormHasError(true)
        }

      }
    }catch(err) {
      console.warn(err);
      setSuccess(false);
      setFormHasError(true);
    }
  }

  const handleContactSubmit = e => {
    e.preventDefault();
    setHasEmptyFields(false);
    setFormHasError(false);
    setIsRobot(false);

    if (success) {
      console.warn('Form already submitted');
      return false;
    }

    const allowedFields = [email, name, company, website, budget, details, phone, timeline, learn, problem];

    // check for bots
    if( honeypot !== '') {
      console.error('This is not an allowed field. No robots allowed!');
      return false;
    }

    // check for empty fields
    const emptyFields = allowedFields.some( field => field === '');

    // stop function because fields are not filled
    if( emptyFields ) {
      console.table(allowedFields);
      setHasEmptyFields(true);
      return false;
    }

    // check for bad words
    const badWords = ['sex', 'hot women', 'get laid', 'ass', 'tits', ' boobs', 'shit', 'fuck'];
    const hasBadWords = badWords.some( word => {
      return details.includes(word);
    })

    if(hasBadWords) {
      setIsRobot(true);
      return false;
    }

    // we are good! Submit the form
    postFormData(e.target)
  }


  const { location } = props;

  return(
    <Layout>
      <Helmet>
        <title>Book Consultation | Cascadia Digital</title>
        <meta property="og:title" content="Book Consultation | Cascadia Digital" />
        <meta property="og:url" content={ location.href } />
      </Helmet>
      <Hero title="Book your consultation" img={meeting} fade={true}>
        Tell me the details of your project needs, and see if we are a fit.
      </Hero>
      <div className="bg-grey-lightest">
        <Section>
          {renderContactLink(hasJS)}
          {hasJS && (
            <form onSubmit={handleContactSubmit} className="mx-auto max-w-lg" data-netlify="true" name="project_questions" data-netlify-honeypot="bot-field">
              <p className="mb-8 text-base md:text-2xl">
                It's important for me to know as many details as possible regarding your project.
                This helps me have a clear picture of what you are looking to accomplish,
                and it helps to shape our initial conversations.
              </p>
              <input type="hidden" name="form-name" value="project_questions" />
              <input
                type="hidden"
                name="bot-field"
              />
              <input type="text" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value) } />
              <label className="mb-8 block text-sm">
                Name
                <input className="mt-1" placeholder="Name" name="name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label className="mb-8 block text-sm">
                Email
                <input className="mt-1" placeholder="Email" name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label className="mb-8 block text-sm">
                Phone
                <input className="mt-1" placeholder="Phone" name="phone" type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>
              <label className="mb-8 block text-sm">
                Company Name
                <input className="mt-1" placeholder="Company name" name="company" type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)}/>
              </label>
              <label className="mb-8 block text-sm">
                Website
                <input className="mt-1" placeholder="https://example.com" name="website" type="url" id="website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
              </label>
              <label className="mb-8 block text-sm">
                Budget Range
                <div className="select-wrap">
                  <select className="mt-1" name="budget" defaultValue={budget} id="budget" onBlur={(e) => {
                    setBudget(e.target.value)
                  }}>
                    <option value="" disabled="disabled">Select budget range</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $15k">$10k - $15k</option>
                    <option value="$15k - $25k">$15k - $25k</option>
                    <option value="$25k +">$25k +</option>
                  </select>
                </div>
              </label>
              <label className="mb-8 block text-sm">
                What kind of relationship do you want to have with Cascadia Digital?
                <div className="select-wrap">
                  <select className="mt-1" name="relationship" id="relationship" defaultValue={relationship} onBlur={(e) => {
                    setRelationship(e.target.value)
                  }}>
                    <option value="" disabled="disabled">Select relationship type</option>
                    <option value="Project based">Project based</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Retainer">Retainer</option>
                  </select>
                </div>
              </label>

              <label className="mb-8 block text-sm">
                What is the #1 problem you are trying to solve with your project?
                <input className="mt-1" placeholder="My biggest problem..." name="problem" type="text" id="problem" value={problem} onChange={(e) => setProblem(e.target.value)} />
              </label>

              <label htmlFor="details" className="block text-sm">Project Details - please be specific!</label>
              <textarea name="details" className="block mb-8 mt-1" id="details" cols="30" rows="10" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>

              <label className="mb-8 block text-sm">
                What is your estimated timeline?
                <div className="select-wrap">
                  <select className="mt-1" name="timeline" id="timeline" defaultValue={timeline} onBlur={(e) => {
                    setTimeline(e.target.value)
                  }}>
                    <option value="" disabled="disabled">Select estimated timeline</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-9 months">6-9 months</option>
                  </select>
                </div>
              </label>

              <label className="mb-8 block text-sm">
                How did you hear about Cascadia Digital?
                <input className="mt-1" placeholder="How did you hear about Cascadia Digital?" name="learn" type="text" id="learn" value={learn} onChange={(e) => setLearn(e.target.value)} />
              </label>

              {/* <label className="block text-sm mb-8">
                <input type="checkbox"/>
                {' '}Add me to your mailing list
              </label> */}

              {hasEmptyFields && (
                <p className="mb-4 text-red">
                  Please ensure all fields are set
                </p>
              )}
              {formHasError && (
                <p className="mb-4 text-red">
                  There was an unexpected error. Please try again.
                </p>
              )}
              {isRobot && (
                <p className="mb-4 text-red">
                  You might not be human... are you being nice?
                </p>
              )}
              <button className="button">Submit</button>
              {success && (
                <p className="mt-4 text-jp-indigo">
                  Thank you! I will try to be in touch as soon as possible.
                </p>
              )}
            </form>
          )}
        </Section>
      </div>
    </Layout>
  )
}

const renderContactLink = ({hasJS})  => {
  if(!hasJS) {
    return (
      <noscript>This form requires JavaScript, sorry!</noscript>
    );
  }
}


export default ContactPage
