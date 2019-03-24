import React from 'react'
// import { Link } from 'gatsby'
import Section from '../components/section'
import Layout from '../components/layout'
import Services from '../components/serviceTeaser'
import Hero from '../components/hero'
import business from '../images/business.svg'

const ServicesPage = () => (
  <Layout>
    <Hero title="Services" img={business}>
      Let’s work together to find the solution for you. <br className="hidden md:block" />
      Here are some of the things we do.
    </Hero>
    <div className="bg-grey-lightest">
      <Section>
        <ul className="services-list">
          <Services />
        </ul>
      </Section>
    </div>
  </Layout>
)

export default ServicesPage
