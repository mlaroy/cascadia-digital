import React, { useState, useEffect } from 'react'
// import { Link } from 'gatsby';
// import { navigate } from 'gatsby-link';
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import CalendlyLink from '../components/calendlyLink';
import Calendly from '../components/calendlyWidget';

import Hero from '../components/hero'
import fun from '../images/fun.svg'
import ServicesBumper from '../components/servicesBumper'
import Section from '../components/section'
// import { encode } from '../utilities/formHelpers';


const ContactPage = ({ location }) => {
  const [hasJS, setHasJS] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [pass, setPass] = useState('something');


  const checkPassword = () => {
    setValidPass( pass === 'meetwithmichael' ? true : false );
  }

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

  return (
    <Layout>
      <Helmet>
        <title>Calendly | Cascadia Digital</title>
        <meta property="og:title" content="Contact | Cascadia Digital" />
        <meta property="og:url" content={ location.href } />
      </Helmet>
      <Hero title="Calendar" img={fun} fade={true}>
        <p className="mb-4">
          Grab a time in my calendar to have a chat.
        </p>
      </Hero>
      <div className="bg-grey-lightest">
        <Section>
          {!validPass && (

            <form className="max-w-xl" onSubmit={checkPassword}>
              <h2>
                Enter password to show calendar
              </h2>
              <label className="mb-8 block text-sm">
                Password
                <input className="mtß mb-2" placeholder="password" type="password" value={pass} onChange={e => setPass(e.target.value)} />

                <button className="button">Submit</button>
              </label>
            </form>
          )}

          {hasJS && validPass && (
            <Calendly
              url="https://calendly.com/cascadia-digital/30-minute-consulatation"
              minWidth="320px"
              height="620px"
              />
          )}
        </Section>

      </div>
      <ServicesBumper />
    </Layout>
  )
}

export default ContactPage
