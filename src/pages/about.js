import React from 'react'
// import { Link } from 'gatsby'
import Section from '../components/section'
import Hero from '../components/hero'
import Layout from '../components/layout'
import portrait from '../images/portrait.jpg';
import startup from '../images/startup-life.svg';
import mark from '../images/cascadia-mark-5.svg'

const SecondPage = ({ siteTitle }) => (
  <Layout>
    <Hero title="About Cascadia Digital">
      At Cascadia, your business goals are our goals. We help you identify <br />
      your needs, and work together with you to find solutions.
    </Hero>
    <Section>
      {/* <img src={startup} alt="" className="mx-auto block mb-8 w-2/3 md:w-1/3"/> */}
      <div className="sm:w-3/4 md:w-3/5 mx-auto">
        <img src={mark} alt={siteTitle} width="70" className="block mx-auto mb-16" />
        <p className="text-lg md:text-xl leading-normal">
          Cascadia Digital was founded by Michael LaRoy, a front-end developer from Vancouver
          with a concern for accessibilty and good user experiences. Cascadia’s vision is to be a partner to agencies and businesses alike, to make
          lives easier when it comes to web projects.
        </p>
        <blockquote className="md:w-4/5 mx-auto">
          Let's make the web a better, more user-friendly place for everyone.
        </blockquote>
        <figure className="w-64 mx-auto block my-16 text-center">
          <img src={portrait} alt="" className="shadow-md rounded block mb-2"/>
          <figcaption>Michael LaRoy</figcaption>
        </figure>
        <p className="text-lg md:text-xl leading-normal">
          Cascadia Digital is based in Abbotsford, in British Columbia’s Fraser Valley.
          While serving clients local to the Valley, we also parter with business and agencies in nearby Vancouver,
          and across the country.
        </p>
      </div>
    </Section>

  </Layout>
)

export default SecondPage
