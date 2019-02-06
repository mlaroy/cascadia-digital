import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section'

const SuccessPage = () => (
  <Layout>
    <Section>
      <h1>Thank you!</h1>
      <p className="text-xl">We'll get back to you as soon as possible.</p>
      <Link to="/about" className="link">About us</Link>
    </Section>
  </Layout>
)

export default SuccessPage
