import React from 'react'
import { Link } from 'gatsby'
import Section from '../components/section'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Section>
      <h1>Our Services</h1>
      <Link to="/" className="link">Go back to the homepage</Link>
    </Section>
    <section className="bg-grey">
      <Section>
        <h2 className="text-3xl">WordPress Development</h2>
        <p className="leading-normal">Welcome to about</p>
        <ul>
          <li>E-Commerce</li>
          <li>Enterprice CMS solution</li>
          <li>Blogs</li>
        </ul>
      </Section>
    </section>
    <section className="bg-white">
      <Section>
        <h2 className="text-3xl">JavaScript Development</h2>
        <p>Welcome to about</p>
      </Section>
    </section>

  </Layout>
)

export default SecondPage
