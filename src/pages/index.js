import React, { Component } from 'react'
import Link from 'gatsby-link';
import Layout from '../components/layout'
import HomeHero from '../components/homeHero'
// import WorkTeaser from '../components/work-teaser'
import Section from '../components/section'
import ContactBumper from '../components/contactBumper'
import ServicesBumper from '../components/servicesBumper'
import AgencyBumper from '../components/agencyBumper'
import cascadiaSVG from '../images/cascadia-logo-5.svg'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <HomeHero />
        <div className="bg-grey-lightest">
          <Section>
            <img src={cascadiaSVG} width="200" className="block mb-8 mx-auto"  alt="Cascadia Logo"/>
            <p className="text-xl md:text-2xl leading-normal text-center mx-auto md:w-4/5">
              Cascadia Digital is your trusted web development partner. Based in Abbotsford BC, we help agencies
              deliver on their web development projects. With a focus on the front end, our experience working in WordPress,
              Vue, React, and Laravel (and more) enables us to help you get the website solution you really need,
              done right the first time.
            </p>
            {/* <p className="sm:w-3/4 ">
              <Link to="about" className="button hover:bg-lighter-blue shadow">Read more</Link>
            </p> */}
          </Section>
        </div>

        <ServicesBumper />

        <AgencyBumper className="bg-grey-lightest" />

        <ContactBumper  />


        {/* <div className="bg-white py-32">
          <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
            <h2 className="text-4xl leading-normal mb-8 leading-none md:text-center">
              Work
            </h2>
            <WorkTeaser />
            <p className="sm:w-3/4 sm:mx-auto sm:text-center mt-8">
              <Link to="work" className="button hover:bg-lighter-blue shadow">More work</Link>
            </p>
          </div>
        </div> */}
        {/* <Bumper
          text="See what clients are saying"
          url="/about"
        /> */}
      </Layout>
    );
  }
}

export default IndexPage
