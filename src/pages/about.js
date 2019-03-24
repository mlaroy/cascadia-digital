import React from 'react'
// import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Section from '../components/section'
import Hero from '../components/hero'
import Layout from '../components/layout'
import portrait from '../images/portrait.jpg';
import collaborate from '../images/collaborate.svg';
import mark from '../images/cascadia-mark-5.svg'
import ContactBumper from '../components/contactBumper'

const SecondPage = ({ siteTitle }) => (
  <Layout>
    <Hero title="About Cascadia Digital" img={collaborate}>
      At Cascadia, your business goals are our goals. We help you identify <br />
      your needs, and work together with you to find solutions.
    </Hero>
    <div className="bg-grey-lightest">
      <Section>
      <img src={mark} alt={siteTitle} width="70" className="block mx-auto my-16" />
        <div className="sm:w-3/4 md:w-3/5 mx-auto">
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
          <figure className="w-64 mx-auto block my-16 text-center">
            <img src={portrait} alt="" className="shadow-md rounded block mb-2"/>
            <figcaption>Michael LaRoy</figcaption>
          </figure>
          <p className="text-lg md:text-2xl leading-normal">
            Cascadia Digital is based in Abbotsford, in British Columbia’s Fraser Valley.
            While serving clients local to the Valley, we also parter with business and agencies in nearby Vancouver,
            and across the country.
          </p>
        </div>
      </Section>
    </div>
    <ContactBumper className="bg-white" />

  </Layout>
)

export default SecondPage
