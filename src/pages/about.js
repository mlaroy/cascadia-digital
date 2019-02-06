import React from 'react'
import { Link } from 'gatsby'
import Section from '../components/section'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Section>
      <h1>About Cascada Digital</h1>
      <p className="text-xl">Cascadia Digital was born in 2018</p>
      <Link to="/" className="link">Go back to the homepage</Link>
    </Section>
    <section className="bg-grey">
      <Section>
        <h2 className="text-3xl">About</h2>
        <p>Welcome to about</p>
      </Section>
    </section>

  </Layout>
)

export default SecondPage
