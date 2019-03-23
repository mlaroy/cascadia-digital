import React, { Component } from 'react'
import Link from 'gatsby-link';
import Layout from '../components/layout'
// import Section from '../components/section'
import Hero from '../components/homeHero'
import WorkTeaser from '../components/work-teaser'
import Bumper from '../components/bumper'
import team from '../images/team.svg'
import servicesSVG from '../images/services.svg'
import Services from '../components/serviceTeaser'
import Partners from '../components/partners'
// import cascadiaSVG from '../images/cascadia-logo.svg'
// import mark from '../images/mark_4.svg'
import mark from '../images/cascadia-mark-5.svg'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <div className="bg-grey-lightest py-32 flex flex-col">
          <div className="md:mx-auto md:w-5/6 px-4 flex items-center flex-col">
            <img src={mark} alt="Cascadia Digial" width="70" className="block md:mx-auto mb-8" />
            <p className="text-xl md:text-2xl leading-normal md:w-3/4 md:mx-auto mb-8 md:text-center ">
              Cascadia Digital is your trusted web development partner. With experience in WordPress, Vue, React,
              and other tools and tech, we work with all manner of clients, whether you are a business
              in need of a website, or an agency in need of a partner for your web project.
            </p>
            <p className="sm:w-3/4 sm:mx-auto sm:text-center ">
              <Link to="about" className="button hover:bg-lighter-blue shadow">About us</Link>
            </p>
          </div>
        </div>



        <div className="bg-white py-32 flex flex-col">
          <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl sm:text-center leading-normal mb-8 leading-none">
              Services
            </h2>
            <ul className="service-grid">
              <Services />
            </ul>
          </div>
        </div>

        {/* <div className="bg-white py-32 flex flex-col">
          <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
            <div className="md:flex">
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none">
                  Is your website letting you down?
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl leading-normal mb-8">
                  Get solutions for improving your online presence. <br />
                  Find out what services we can offer.
                </p>
                <p>
                  <Link to="services" className="button hover:bg-lighter-blue shadow">See services</Link>
                </p>
              </div>
              <div className="md:w-1/2 text-center">
                <img src={servicesSVG} className="w-3/4" alt=""/>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-white py-32 flex flex-col">
          <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
            <div className="md:flex">
              <div className="md:w-1/2 text-center">
                <img src={team} className="w-3/4" alt=""/>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none">
                  Team up with Cascadia Digital
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl leading-normal mb-8">
                  With Cascadia, you become a partner, not a client. <br /> Let's team up to meet your business goals.
                </p>
                <p>
                  <Link to="contact" className="button hover:bg-lighter-blue shadow">Get in touch</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grey-lightest  py-32 flex flex-col">
          <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl sm:text-center leading-normal mb-16 leading-none">
              Clients &amp; Agency Partners
            </h2>
            <Partners />
          </div>
        </div>

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
