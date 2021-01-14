import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
// import { navigate } from 'gatsby-link';
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm';

import Hero from '../components/hero'
import fun from '../images/fun.svg'
import ServicesBumper from '../components/servicesBumper'
import Section from '../components/section'
// import { encode } from '../utilities/formHelpers';


const ContactPage = ({ location }) => {
  const [hasJS, setHasJS] = useState(false);

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
        {/* <Section>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif">But first, let me answer some questions you may have</h2>
          <p></p>

        </Section> */}

      <Section className="md:text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Are you ready to book a consultation?</h2>
          <p className="mb-8 text-lg md:text-xl">
            To enquire about starting a project, book a consultation to see if we are a fit to work together.
          </p>
          <Link
            to="/book-a-consultation"
            className="button"
          >Book Now</Link>
        </div>
      </Section>
      </div>
      <div >
        <Section>
          {renderContactLink(hasJS)}
          {hasJS && (
            <ContactForm />
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
      <noscript>This form requires JavaScript, sorry!</noscript>
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
