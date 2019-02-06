import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section'
import ContactForm from '../components/contact-form'

const ContactPage = () => (
  <Layout>
    <Section>
      <h1>Work with us</h1>
      <p className="text-xl">Get in touch to find out how we can work together.</p>
      <hr />
      <ContactForm />
    </Section>
  </Layout>
)

export default ContactPage
