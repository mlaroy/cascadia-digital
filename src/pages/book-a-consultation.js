import React, { useState, useEffect } from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import meeting from '../images/calendar.svg'
import Input from '../components/input';
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
  const [emptyFields, setEmptyFields] = useState([]);
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
    const hasEmptyFields = allowedFields.some( field => field === '');
    const empty = allowedFields.filter( field => field === '');

    // stop function because fields are not filled
    if( hasEmptyFields ) {
      setEmptyFields(empty);
      console.table(empty);
      setHasEmptyFields(true);
      return false;
    }

    // check for bad words
    const badWords = [' sex', 'hot women', 'get laid', ' ass', ' tits', ' boobs', ' shit', ' fuck'];
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
        <title>Book Converation | Cascadia Digital</title>
        <meta property="og:title" content="Book Consultation | Cascadia Digital" />
        <meta property="og:url" content={ location.href } />
      </Helmet>
      <Hero
        title="Book your conversation"
        img={meeting}
        imgAlt="calender and clock"
        fade={true}
      >
        Tell me the details of your project needs, and see if we are a fit.
      </Hero>
      <div className="bg-grey-lightest">
        <Section>
          {renderContactLink(hasJS)}
          {hasJS && (
            <form onSubmit={handleContactSubmit} className="mx-auto md:px-48" data-netlify="true" name="project_questions" data-netlify-honeypot="bot-field">
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
              <Input
                value={name}
                name="name"
                placeholder="Name"
                label="Name"
                changeHandler={setName}
                isEmpty={emptyFields.includes(name)}
              />
              <Input
                value={email}
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                changeHandler={setEmail}
                isEmpty={emptyFields.includes(email)}
              />
              <Input
                value={phone}
                type="tel"
                name="phone"
                placeholder="Phone"
                label="Phone"
                changeHandler={setPhone}
                isEmpty={emptyFields.includes(phone)}
              />
              <Input
                value={company}
                name="company"
                placeholder="Company name"
                label="Company name"
                changeHandler={setCompany}
                isEmpty={emptyFields.includes(company)}
              />
              <Input
                value={website}
                name="website"
                placeholder="https://example.com"
                label="Website"
                changeHandler={setWebsite}
                isEmpty={emptyFields.includes(website)}
              />

              <label className="mb-4 block text-sm">
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
                {emptyFields.includes(budget) && (
                  <span className="text-sm text-red">This field is requred</span>
                )}
              </label>
              <label className="mb-4 block text-sm">
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
                {emptyFields.includes(relationship) && (
                  <span className="text-sm text-red">This field is requred</span>
                )}
              </label>

              <Input
                value={problem}
                name="problem"
                placeholder="My biggest problem..."
                label="What is the #1 problem you are trying to solve with your project?"
                changeHandler={setProblem}
                isEmpty={emptyFields.includes(problem)}
              />

              <div className="form-field mb-4">
                <label htmlFor="details" className="block text-sm">Project Details - please be specific!</label>
                <textarea name="details" className="block mb-1 mt-1" id="details" cols="30" rows="10" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                {emptyFields.includes(details) && (
                  <span className="text-sm text-red">This field is requred</span>
                )}
              </div>

              <label className="mb-4 block text-sm">
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
                {emptyFields.includes(timeline) && (
                  <span className="text-sm text-red">This field is requred</span>
                )}
              </label>

              <Input
                value={learn}
                name="learn"
                placeholder="How did you hear about Cascadia Digital?"
                label="How did you hear about Cascadia Digital?"
                changeHandler={setLearn}
                isEmpty={emptyFields.includes(learn)}
              />

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
              <button className="button mt-8">Submit</button>
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
