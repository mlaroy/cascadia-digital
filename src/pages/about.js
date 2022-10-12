import React from 'react'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import Section from '../components/section'
import Hero from '../components/hero'
import Layout from '../components/layout'
// import portrait from '../images/portrait.jpg';
import headshot from '../images/headshot.jpg';
import collaborate from '../images/collaborate.svg';
// import mark from '../images/cascadia-mark-5.svg'
import ContactBumper from '../components/contactBumper'
import ServicesBumper from '../components/servicesBumper'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'


const About = props => (
  <Layout>
    <Helmet>
      <title>About | Cascadia Digital</title>
      <meta property="og:title" content="About | Cascadia Digital" />
      <meta property="og:url" content={ props.location.href } />
    </Helmet>
    <Hero
      title="About Cascadia Digital"
      img={collaborate}
      fade={true}
      imgAlt="teammates discussing post-it notes on project wall"
    >
      I help brands get their message out with less friction.
      {/* <br className="hidden md:block" />easy website publishing. */}
      {/* I help branding agencies deliver better web  development projects. */}
    </Hero>
    <div className="bg-grey-lightest">
      <Section>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <figure className="w-64 md:w-auto mx-auto block text-center px-4 pb-16 responsive-img">
              <img src={headshot} alt="" className="shadow rounded block mb-4 responsive-img"/>
              <figcaption>
                <a href="https://mikelaroy.ca" className="link hover:underline block mb-4">Michael LaRoy</a>
                <a href="https://twitter.com/laroymike" className="link inline-block mx-2">
                  <LogoTwitter color="#223843" />
                </a>
                <a href="https://ca.linkedin.com/in/mikelaroy" className="link inline-block mx-2">
                  <LogoLinkedin color="#223843" />
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="md:w-2/3 lg:w-3/5 mx-auto md:pl-4 max-w-lg">
            {/* <img src={mark} alt={props.siteTitle} width="50" className="block mb-8" /> */}
            <p className="text-lg md:text-2xl leading-normal mb-8 font-bold">
              I believe businesses should be able to have high-quality, accessible websites,
              with an easy and reliable Content Management System, tailored to their needs.
            </p>
            <p className="text-lg md:text-2xl leading-normal mb-8">
              I have worked with small startups, mid-size agencies, as well as large national corporations.
              My experience enables me to work right along side your dev team, or to lead
              and execute your website project from start to finish.
            </p>
            <hr className="my-16 block"/>
            <p className="text-lg md:text-xl leading-normal mb-8">
              Hi, my name is Michael LaRoy - I’m a front-end developer from Vancouver
              with a concern for accessibilty and good user experiences. My vision is
              to be the preferred development partner for brands who want easy and reliable
              website publishing.
            </p>
            <p className="text-lg md:text-xl leading-normal">
              Cascadia Digital is based in British Columbia’s Fraser Valley. I partner with businesses in nearby Vancouver
              and across the country.
            </p>
          </div>
        </div>
      </Section>
    </div>
    <ServicesBumper className="bg-white" />
    <ContactBumper className="bg-grey-lightest" />

  </Layout>
)

export default About
