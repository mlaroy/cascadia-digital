import React, { Component } from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Section from '../components/section'
import ContactBumper from '../components/contactBumper'
import ServicesBumper from '../components/servicesBumper'
import AgencyBumper from '../components/agencyBumper'
import done from '../images/done.svg'
import MdCheckmark from 'react-ionicons/lib/MdCheckmark'
// import CalendlyPopup from '../components/calendlyLink';
import { Link } from 'gatsby'
import NewsletterForm from '../components/newsletterForm';
import bg from '../images/snow-capped-mountains-seen-through-the-trees-min.jpg';
// import mountains from '../images/snowy-plains-and-mountains.jpg';

class IndexPage extends Component {

  render() {
    return (
      <Layout full={true} >
        <Hero
          title="I help brands get their message out without the friction."
          bg={bg}
          bgAlt="Mountain landscape"
          full={true}
        >
          <p className="mb-12 md:mb-24 text-lg md:text-2xl">
            Make your website editing experience smooth by <br className="hidden lg:block" />
            removing the issues causing you headaches.
          </p>

          <div className="md:flex items-center">
            <Link to="/book-a-consultation" className="button">Book Your Consultation</Link>
            <Link to="/make-better-websites" className="link mt-8 md:ml-12 md:mt-0 text-lg text-white block">Download free guide to better websites &rarr;</Link>
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
          <div className="mx-auto md:w-4/5 lg:w-3/4 has-bg">
            <h2 className="text-2xl md:text-3xl">
              Are you spending too much of your valuable time struggling to update your website content?
            </h2>
            <ul className="mb-8 leading-normal">
              <li className="text-xl mb-4 md:w-3/4">Are you afraid to edit anything on your website because it might break something?</li>
              <li className="text-xl mb-4 md:w-3/4">Do you need an experienced and realiable development partner to help realize your vision for your website?</li>
              <li className="text-xl mb-4 md:w-3/4">Are you tired of the trial and error that comes with using generic visual page builders?</li>
            </ul>
            {/* <p className="text-lg lg:text-xl mb-8 md:w-3/4">
              What if making updates to your website could be truly painless?
            </p> */}
            {/* <h2 className="text-2xl md:text-3xl">
              Are you afraid to edit anything on your website because it might break something?
            </h2>
            <p className="text-lg lg:text-xl mb-8 md:w-3/4">
              Imagine a website publishing experience that you can rely on to work consistently,
              without worrying about it breaking at any moment.
            </p> */}
            {/* <h2 className="text-2xl md:text-3xl">
              Do you need an experienced and realiable development partner to help realize your vision for your website?
            </h2> */}
            <h2 className="text-2xl md:text-3xl">
              What if making updates to your website could be truly painless?
            </h2>
            <ul className="mb-8 leading-normal">
              <li className="text-xl mb-4 md:w-3/4">Imagine a website publishing experience that you can rely on to work consistently,
              without worrying about it breaking at any moment.</li>
              <li className="text-xl mb-4 md:w-3/4">Imagine having a development partner you could trust who could help make your vision a reality.</li>
              <li className="text-xl mb-4 md:w-3/4">Imagine being able to enter content and be confident that it will always looks just how it’s supposed to.</li>
            </ul>
            <h2 className="text-2xl md:text-3xl">
              Partnering with Cascadia Digital is the answer.
            </h2>
            <p className="text-lg lg:text-xl mb-8">
              By working with me, we can make the improvements necessary to change your website content editing experience
              for the better, freeing you to focus on what matters most: your content.
            </p>
            <p className="text-lg lg:text-xl mb-8">
              Visual page builders have a tendency to be clunky and problematic. I prefer a tailored content entry experience,
              designed to work with your website’s design seemlessly.
            </p>
            <p className="text-lg lg:text-xl">
              Book a consultation to see how we can fix the things causing you headaches on your website, and make
              things simpler and easier for you with a straightforward approach.
            </p>

            {/* <p className="mt-16">
              <CalendlyPopup />
            </p> */}

            <div className="p-8 shadow mt-12 mx-auto rounded font-bold text-center bg-jp-indigo">
              <h3 className="text-lg sm:text-xl md:text-2xl text-white">Ready to make web publishing easier?</h3>
              <Link to="/book-a-consultation" className="button button--small mt-4">Book your consultation</Link>
            </div>
          </div>
        </Section>

        <div className="bg-grey-lightest">
          <Section>
            {/* <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-normal mb-8 leading-none md:text-center">
              By working with me, you can:
            </p> */}
            <div className="flex flex-col md:flex-row">

              <div className="md:w-1/2 flex flex-col justify-center">
                <div>
                  <img src={done} className="block p-4 mb-4 w-1/2 md:w-2/3 mx-auto"  alt="check list" width="389" height="276"/>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 leading-none text-left">
                  By working with me, you can:
                </h3>
                <ul className="list-reset text-left mb-12">
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
                <Link to="/book-a-consultation" className="button inline-block flex-grow-none hover:bg-lighter-blue shadow">
                  Work with me
                </Link>
              </div>
            </div>
          </Section>
        </div>

        <AgencyBumper />

        {/* <div className="bg-grey-lightest">
          <Section>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none md:text-center">What clients are saying</h3>
            <div className="service-grid">
              <div className="bg-white rounded-lg shadow p-8">
                <blockquote>
                  <p className="mb-4">Cascadia Digital has the tools to help you get the
                    website solution you really need to help your business succeed
                  </p>
                  <span className="text-sm italic">&mdash; Zach, Domain7</span>
                </blockquote>
              </div>
              <div className="bg-white rounded-lg shadow p-8">
                <blockquote>
                  <p className="mb-4">Cascadia Digital has the tools to help you get the
                    website solution you really need to help your business succeed
                  </p>
                  <span className="text-sm italic">&mdash; Zach, Domain7</span>
                </blockquote>
              </div>
            </div>
          </Section>
        </div> */}

        {/* I believe businesses should be able to have high-quality, accessible websites,
        without a complicated or confusing Content Management System, tailored to their needs. */}


        <ServicesBumper className="bg-grey-lightest"/>
        {/* <ServicesBumper /> */}



        <ContactBumper />
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
