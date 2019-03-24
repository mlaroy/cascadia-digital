import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Section from '../components/section'
import Hero from '../components/hero'
import Layout from '../components/layout'
import portrait from '../images/portrait.jpg';
import collaborate from '../images/collaborate.svg';
import mark from '../images/cascadia-mark-5.svg'
import ContactBumper from '../components/contactBumper'

const About = props => (
  <Layout>
    <Helmet>
      <title>About | Cascadia Digital</title>
      <meta property="og:title" content="About | Cascadia Digital" />
      <meta property="og:url" content={ props.location.href } />
    </Helmet>
    <Hero title="About Cascadia Digital" img={collaborate}>
      At Cascadia, your business goals are our goals. We help you identify <br className="hidden md:block" />
      your needs, and work together with you to find solutions.
    </Hero>
    <div className="bg-grey-lightest">
      <Section>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <figure className="w-64 mx-auto block text-center pb-16">
              <img src={portrait} alt="" className="shadow-md rounded block mb-2"/>
              <figcaption>Michael LaRoy</figcaption>
            </figure>
          </div>
          <div className="md:w-2/3 mx-auto">
            <img src={mark} alt={props.siteTitle} width="50" className="block mb-8" />
            <p className="text-lg md:text-2xl leading-normal mb-8">
              Cascadia Digital was founded by Michael LaRoy, a front-end developer from Vancouver
              with a concern for accessibilty and good user experiences. Cascadia’s vision is to be a partner
              to agencies and businesses alike, making lives easier when it comes to your web projects.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Michael has worked with small startups, mid-size agencies, as well as large national corporations.
              His experience enables him to fit right in as an embedded member of your dev team, or to lead
              and execute your website project.
            </p>
            <hr className="my-16 block"/>
            <p className="text-lg md:text-2xl leading-normal">
              Cascadia Digital is based in British Columbia’s Fraser Valley.
              While serving clients local to the Valley, we also parter with business and agencies in nearby Vancouver,
              and across the country.
            </p>
          </div>
        </div>
      </Section>
    </div>
    <ContactBumper className="bg-white" />

  </Layout>
)

export default About
