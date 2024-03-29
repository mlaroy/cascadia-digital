import React, { Component } from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Section from '../components/section'
import ContactBumper from '../components/contactBumper'
import ServicesBumper from '../components/servicesBumper'
import AgencyBumper from '../components/agencyBumper'
import done from '../images/done.svg'

import headInHands from '../images/head-in-hands.jpg'
// import glasses from '../images/glasses-smiles.jpg'
import smiles from '../images/smiles-laptop-screen-min.jpg'


import MdCheckmark from 'react-ionicons/lib/MdCheckmark'
// import CalendlyPopup from '../components/calendlyLink';
import { Link } from 'gatsby'
// import NewsletterForm from '../components/newsletterForm';
import bg from '../images/snow-capped-mountains-seen-through-the-trees-min.jpg';
// import mountains from '../images/snowy-plains-and-mountains.jpg';

class IndexPage extends Component {

  render() {
    return (
      <Layout full={true} >
        <Hero
          // title="I help brands get more sales leads with better SEO"
          title="I help brands get their message out without the friction."
          bg={bg}
          bgAlt="Mountain landscape"
          full={true}
        >
          <p className="mb-12 md:mb-24 text-lg md:text-2xl">
            Make your website editing experience smooth by <br className="hidden lg:block" />
            removing the issues causing you headaches.
            {/* Make your website work for you and get more traffic <br className="hidden lg:block" />
            by fixing your technical SEO problems. */}
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <Link to="/book-a-consultation" className="button">Book Your conversation</Link>
            {/* <Link to="/services/technical-seo-audit" className="button">Schedule Your SEO Audit</Link> */}
            <Link to="/make-better-websites" className="link text-white underline">Free PDF: 3 Ways To Improve Your Website’s Quality &rarr;</Link>
            {/* mt-8 md:ml-8 md:mt-0 */}
          </div>

          {/* <NewsletterForm
            url="1774006"
            buttonText="Subscribe"
            flex="true">
          </NewsletterForm> */}

          {/* <div>
            <h2 className="text-2xl md:text-3xl mt-2 mb-2 text-white">Get my free guide to </h2>
            <Link to="#" className="button">Get Your Free Guide Now</Link>
          </div> */}

        </Hero>

        <Section>
          <div className="mx-auto">
            <div className="grid md:grid-cols-2 items-center py-16">
              <div>
                <img src={headInHands} alt="distressed man holding head in his hands" className="rounded block w-2/3 mx-auto md:w-full" />
              </div>
              <div>
                <div className="relative px-8 py-12 bg-white transform -translate-y-12 md:-translate-x-12 md:translate-y-0 rounded shadow-xl">
                  <h2 className="text-2xl md:text-3xl">
                    Are you wasting time struggling to update your website content?
                  </h2>
                  <ul className="leading-normal list-disc list-outside pl-8">
                    <li className="text-lg mb-4">You fear making changes that might break it</li>
                    <li className="text-lg mb-4">You are tired of the trial and error with using generic visual page builders</li>
                    <li className="text-lg">You need experienced and realiable development partner to help realize your vision</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="py-16">
              <div className="grid md:grid-cols-2 items-center">
                <div className="order-1 md:order-2">
                  <img src={smiles} alt="relaxed woman smiling with her laptop on her couch" className="rounded block w-2/3 mx-auto md:w-full" />
                </div>
                <div className="order-2 md:order-1 relative px-8 py-12 bg-white transform -translate-y-12 md:translate-x-12 md:translate-y-0 rounded shadow-xl">
                  <h2 className="text-2xl md:text-3xl">
                    What if making updates to your website could be truly painless?
                  </h2>
                  <ul className="leading-normal list-disc list-outside pl-8">
                    <li className="text-lg mb-4">
                      Imagine a website publishing experience that you can rely on to work consistently,
                      without worrying about it breaking at any moment.
                    </li>
                    <li className="text-lg">Imagine having a development partner you could trust who could help make your vision a reality.</li>
                    {/* <li className="text-lg">Imagine being able to enter content and be confident that it will always looks just how it’s supposed to.</li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="has-bg md:w-2/3 mx-auto mt-24">
              <h2 className="text-2xl md:text-3xl">
                Partnering with Cascadia Digital is the answer.
              </h2>
              <p className="text-lg lg:text-xl mb-8">
                By working with me, we can make the improvements necessary to change your website content editing experience
                for the better, freeing you to focus on what matters most: your content.
              </p>
              <p className="text-lg lg:text-xl mb-8">
                Sites using visual page builders have a tendency to be clunky, difficult to use, and functionally
                problematic. I prefer a tailored content entry experience, designed to work with your website’s design seemlessly.
              </p>
              <p className="text-lg lg:text-xl mb-16">
                Book a conversation to see how we can fix the things causing you headaches on your website, and make
                things simpler and easier for you with a straightforward approach.
              </p>

              <div className="p-8 shadow-2xl mt-12 mx-auto rounded font-bold text-center bg-jp-indigo">
                <h3 className="text-lg sm:text-xl md:text-2xl text-white">Ready to make web publishing easier?</h3>
                <Link to="/book-a-consultation" className="button button--small mt-4">Book your conversation</Link>
              </div>
            </div>

            {/* <p className="mt-16">
              <CalendlyPopup />
            </p> */}

          </div>
        </Section>

        <div className="bg-grey-lightest">
          <Section>
            {/* <p className="text-2xl sm:text-3xl md:text-4xl font-dm-serif font-bold leading-normal mb-8 leading-none md:text-center">
              By working with me, you can:
            </p> */}
            <div className="flex flex-col md:flex-row">

              <div className="md:w-1/2 flex flex-col justify-center">
                <div>
                  <img src={done} className="block p-4 mb-4 w-1/2 md:w-2/3 mx-auto"  alt="check list" width="389" height="276" loading="lazy"/>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-dm-serif mb-8 leading-none text-left">
                  By working with me, you can:
                </h3>
                <ul className="list-none text-left mb-12">
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Stop wasting your valuable time troubleshooting
                  </li>
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Make updates to your website with confidence
                  </li>
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Have an experienced and dependable development partner
                  </li>
                </ul>
                <Link to="/book-a-consultation" className="button inline-block flex-grow-none">
                  Work with me
                </Link>
              </div>
            </div>
          </Section>
        </div>

        <AgencyBumper />

        <div className="bg-grey-lightest">
          <Section>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none md:text-center">What clients are saying</h3>
            <div className="service-grid flex flex-col lg:grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-2xl p-4 md:p-8 mx-auto">
                <blockquote>
                  <p className="mb-6 text-base md:text-xl">
                    I'd highly recommend working with Michael - it's rare to find someone who acts as a bridge for so many areas,
                    but specifically because of his ability to communicate and lead digital projects well. I deeply appreciate
                    his ability to find the optimal solution considering the bigger picture.
                  </p>
                  <span className="block">
                     &mdash; Zach
                    <span className="block font-bold">Domain7</span>
                  </span>
                </blockquote>
              </div>
              <div className="bg-white rounded-lg shadow-2xl p-4 md:p-8 mx-auto">
                <blockquote>
                  <p className="mb-6 text-base md:text-xl">
                    I have the best experiences with Michael’s skills and attention in how he delivers and responds to our requirements.
                    Compared to other vendors, his quality of work, level of analysis and response is way better than the rest.
                    </p>
                  <span className="block">
                    &mdash; Tom
                    <span className="block font-bold">BC Hydro</span>
                  </span>
                </blockquote>
              </div>
            </div>
          </Section>
        </div>

        {/* I believe businesses should be able to have high-quality, accessible websites,
        without a complicated or confusing Content Management System, tailored to their needs. */}


        {/* <ServicesBumper className="bg-grey-lightest"/> */}
        <ServicesBumper />



        {/* <ContactBumper /> */}
        <ContactBumper className="bg-grey-lightest"  />


        {/* <div className="bg-white py-32">
          <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
            <h2 className="text-4xl leading-normal mb-8 leading-none md:text-center">
              Work
            </h2>
            <WorkTeaser />
            <p className="sm:w-3/4 sm:mx-auto sm:text-center mt-8">
              <Link to="work" className="button">More work</Link>
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
