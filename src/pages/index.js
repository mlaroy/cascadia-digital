import React, { Component } from 'react'
import Layout from '../components/layout'
// import HomeHero from '../components/homeHero'
import Hero from '../components/hero'
// import WorkTeaser from '../components/work-teaser'
import growth from '../images/growth.svg'
import Section from '../components/section'
import ContactBumper from '../components/contactBumper'
import ServicesBumper from '../components/servicesBumper'
import AgencyBumper from '../components/agencyBumper'
import cascadiaSVG from '../images/cascadia-logo-5.svg'
import done from '../images/done.svg'
import MdCheckmark from 'react-ionicons/lib/MdCheckmark'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Hero title="Helping you build your business with a great new website" img={growth} fade={true}>
          Cascadia Digital is your trusted partner to help you <br className="hidden md:block" />  grow your digital business
        </Hero>
        <div className="bg-grey-lightest">
          <Section>
            <p className="text-lg md:text-xl lg:text-2xl leading-normal mx-auto md:w-4/5 lg:w-3/4">
              <img src={cascadiaSVG} width="200" className="block mb-8"  alt="Cascadia Logo"/>
              I help agencies and businesses deliver on their web development projects. As a Shopify Partner, and with
              experience working in WordPress, Vue, React (and more), Cascadia Digital has the tools to help you get the
              website solution you really need to help your business succeed.
            </p>
            {/* <p className="sm:w-3/4 ">
              <Link to="about" className="button hover:bg-lighter-blue shadow">Read more</Link>
            </p> */}

          </Section>
        </div>

        <Section>
          <h3 class="text-2xl sm:text-4xl md:text-5xl leading-normal mb-8 leading-none md:text-center">Why choose Cascadia Digital?</h3>
          <div className="flex flex-col md:flex-row">

            <div className="md:w-1/2 flex flex-col justify-center">
              <div>
                <img src={done} className="block p-4 mb-4 w-1/2 md:w-2/3 md:mx-auto"  alt="Cascadia Logo"/>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <ul className="list-reset">
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> Your business success is my goal
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> I value a collaborative, strategic approach
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> Get timely communication and clear expectations
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> I prioritize substance over flashiness
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> Get the best solution, not the cheapest
                </li>
              </ul>
            </div>
          </div>
        </Section>


        <ServicesBumper  className="bg-grey-lightest"/>
        {/* <ServicesBumper className="bg-grey-lightest" /> */}

        <AgencyBumper />
        {/* <AgencyBumper  /> */}

        <ContactBumper className="bg-grey-lightest"  />
        {/* <ContactBumper className="bg-grey-lightest"  /> */}


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
