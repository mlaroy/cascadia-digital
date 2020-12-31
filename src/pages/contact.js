import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
// import { navigate } from 'gatsby-link';
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import fun from '../images/fun.svg'
import ServicesBumper from '../components/servicesBumper'
import Section from '../components/section'
import { encode } from '../utilities/formHelpers';

const ContactPage = ({ location }) => {
  const [hasJS, setHasJS] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
          message
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

    const allowedFields = [email, name, message];

    // check for bots
    if( honeypot !== '') {
      console.error('This is not an allowed field. No robots allowed!');
      return false;
    }

    // check for empty fields
    const emptyFields = allowedFields.some( field => field === '');

    // stop function because fields are not filled
    if( emptyFields ) {
      setHasEmptyFields(true);
      return false;
    }

    // check for bad words
    const badWords = ['sex', 'hot women', 'get laid', 'ass', 'tits', ' boobs', 'shit', 'fuck'];
    const hasBadWords = badWords.some( word => {
      return message.includes(word);
    })

    if(hasBadWords) {
      setIsRobot(true);
      return false;
    }

    // we are good! Submit the form
    postFormData(e.target)
  }

  return(
    <Layout>
      <Helmet>
        <title>Contact | Cascadia Digital</title>
        <meta property="og:title" content="Contact | Cascadia Digital" />
        <meta property="og:url" content={ location.href } />
      </Helmet>
      <Hero title="Contact me" img={fun} fade={true}>
        <p className="mb-4">
          Looking to get in touch? Send me a note below.
        </p>
      </Hero>
      <div className="bg-grey-lightest">
        <Section className="md:text-center">
          <div className="mx-auto max-w-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Are you ready to book a consultation?</h2>
            <p className="mb-8">
              To enquire about starting a project, book a consultation to see if we are a fit to work together.
            </p>
            <Link
              to="/book-consultation"
              className="button"
            >Book Now</Link>
          </div>
        </Section>
      </div>
      <div className="bg-white">
      {renderContactLink(hasJS)}
        <Section>
          <form onSubmit={(e) => handleContactSubmit(e)} className="mx-auto max-w-lg" method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
            <h2>For general inquiries, please send me a note.</h2>
            <input
              type="hidden"
              name="bot-field"
            />
            <input type="text" className="hidden" value={honeypot} onChange={e => setHoneypot(e.target.value) } />
            <label className="mb-8 block text-sm">
              Name
              <input placeholder="Name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="mb-8 block text-sm">
              Email
              <input placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="message" className="block text-sm">Message</label>
            <textarea name="message" className="block mb-8" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
          </form>
          {success && (
            <p className="mt-4 text-jp-indigo">
              Thank you! I will try to be in touch as soon as possible.
            </p>
          )}
        </Section>
      </div>
      <ServicesBumper className="bg-grey-lightest" />
    </Layout>
  )
}

const renderContactLink = ({hasJS})  => {
  if(!hasJS) {
    return (
      <noscript>This requires JavaScript, sorry!</noscript>
    );
  } else {
    return (
      <p className="mt-16">
        <a href="mailto&#58;info%40c&#97;s%63%61d%&#54;9%61&#46;di&#103;&#37;&#54;&#57;&#116;al" className="button">Email Cascadia Digital</a>
      </p>
    );
  }
}

export default ContactPage
