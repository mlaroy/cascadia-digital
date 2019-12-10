import React, { Component } from 'react'
import Layout from '../components/layout'
import HomeHero from '../components/homeHero'
// import WorkTeaser from '../components/work-teaser'
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
        <HomeHero />
        <div className="bg-grey-lightest">
          <Section>
            <img src={cascadiaSVG} width="200" className="block mb-8 md:mx-auto"  alt="Cascadia Logo"/>
            <p className="text-lg md:text-xl lg:text-2xl leading-normal md:text-center mx-auto md:w-4/5 lg:w-3/4">
              Cascadia Digital is your trusted web development partner. Based in Abbotsford BC, I help agencies and businesses
              deliver on their web development projects. With a focus on the front end, my experience working in WordPress,
              Vue, React, and Laravel (and more) enables me to help you get the website solution you really need,
              done right.
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
                  <MdCheckmark /> Value a collaborative, strategic approach
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> Timely communication and clear expectations
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> Prioritize substance over flashiness
                </li>
                <li className="py-2 text-lg md:text-xl lg:text-2xl">
                  <MdCheckmark /> Get the best solution, not the easiest
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
