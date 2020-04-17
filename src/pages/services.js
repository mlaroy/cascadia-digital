import React from 'react'
import Helmet from 'react-helmet'
import Section from '../components/section'
import Layout from '../components/layout'
import Services from '../components/serviceTeaser'
import Hero from '../components/hero'
import business from '../images/business.svg'
import ContactBumper from '../components/contactBumper'

const ServicesPage = props => (
  <Layout>
    <Helmet>
      <title>Services | Cascadia Digital</title>
      <meta property="og:title" content="Services | Cascadia Digital" />
      <meta property="og:url" content={ props.location.href } />
    </Helmet>
    <Hero title="Services" img={business} fade={true}>
      Let’s work together to find the solution for you. <br className="hidden md:block" />
      Here are some of the things I do.
    </Hero>
    <div className="bg-grey-lightest">
      <Section>
        <ul className="service-grid">
          <Services />
        </ul>
      </Section>
    </div>
    <ContactBumper />
  </Layout>
)

export default ServicesPage
