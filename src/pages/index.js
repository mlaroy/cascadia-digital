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
          title="I help branding agencies deliver better web development projects."
          bg={bg}
          bgAlt="Mountain landscape"
          full={true}
        >
          <p className="mb-16 text-lg md:text-xl">
            Cascadia Digital provides you with the expertise you <br className="hidden md:block" />
            need to create better web projects for your clients.
          </p>

          <NewsletterForm
            url="1774006"
            buttonText="Subscribe"
            flex="true">
            <h2 className="text-2xl mt-2 mb-2 text-white">Subscribe to my mailing list</h2>
          </NewsletterForm>
        </Hero>

        <div className="mt-24">
          <Section>
            <div className="mx-auto md:w-4/5 lg:w-3/4 has-bg">
              <h2 className="text-xl sm:text-2xl md:text-3xl">
                Is your agency missing key in-house web development talent?
              </h2>
              <p className="text-lg lg:text-xl mb-16 md:w-2/3">
                What if you could have a reliable partner you can call when you don't have the
                resources available for a project?
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl">
                Do you scramble to find a good developer to build your beautifully designed websites?
              </h2>
              <p className="text-lg lg:text-xl mb-16 md:w-2/3">
                Imagine a world where you can stop worrying whether you can rely on
                another new contractor to deliver.
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl">
                Are you stuck providing basic Squarespace templates for your client projects?
              </h2>
              <p className="text-lg lg:text-xl md:w-2/3">
                Picture landing more and better clients by offering bespoke websites instead.
              </p>
              {/* <h2 className="text-2xl sm:text-3xl md:text-4xl">Are you missing out on projects because you aren’t able to include website development at all?</h2>
              <p className="text-lg md:text-xl lg:text-2xl">I can step in to build your website projects for you.</p> */}
              {/* <p className="mt-16">
                <CalendlyPopup />
              </p> */}

              <div className="p-8 shadow-lg mt-24 mx-auto rounded font-bold text-center bg-white">
                Not a brand or marketing agency?  I can help your business too. <br/>
                <Link to="services" className="link text-blue mt-4 inline-block mx-auto">See my services</Link>
              </div>
            </div>
          </Section>
        </div>


        <div className="bg-grey-lightest">

          <Section>
            {/* <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-normal mb-8 leading-none md:text-center">
              By working with me, you can:
            </p> */}
            <div className="flex flex-col md:flex-row">

              <div className="md:w-1/2 flex flex-col justify-center">
                <div>
                  <img src={done} className="block p-4 mb-4 w-1/2 md:w-2/3 mx-auto"  alt="Cascadia Logo"/>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center items-start">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-normal mb-8 leading-none text-left">
                  By working with me, you can:
                </h3>
                <ul className="list-reset text-left mb-12">
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Confidently say yes to more clients
                  </li>
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Offer more complex web projects
                  </li>
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Provide faster and more accessible websites
                  </li>
                  <li className="py-2 text-lg md:text-xl lg:text-2xl relative pl-8">
                    <MdCheckmark style={{
                      position: 'absolute',
                      left: '-0.25rem'
                    }} /> Stop worrying who will build your web projects
                  </li>
                  {/* <li className="py-2 text-lg md:text-xl lg:text-2xl">
                    <MdCheckmark /> Have priority project booking
                  </li> */}
                  {/* <li className="py-2 text-lg md:text-xl lg:text-2xl">
                    <MdCheckmark /> Get the best solution, not the cheapest
                  </li> */}
                </ul>
                <Link to="contact" className="button inline-block flex-grow-none hover:bg-lighter-blue shadow">
                  Work with me
                </Link>
              </div>
            </div>
          </Section>
        </div>

        {/* <div className="bg-grey-lightest">
          <Section>
            <p className="text-lg md:text-xl lg:text-2xl leading-normal mx-auto md:w-4/5 lg:w-3/4">
              <img src={cascadiaSVG} width="200" className="block mb-8"  alt="Cascadia Logo"/>
              I help agencies and businesses deliver on their web development projects. As a Shopify Partner, and with
              experience working in WordPress, Vue, React (and more), Cascadia Digital has the tools to help you get the
              website solution you really need to help your business succeed.
            </p>
            <p className="sm:w-3/4 ">
              <Link to="about" className="button hover:bg-lighter-blue shadow">Read more</Link>
            </p>

          </Section>
        </div> */}

        <AgencyBumper />

        <div className="bg-grey-lightest">
          <Section>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none md:text-center">What clients are saying</h3>
            <div className="service-grid">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <blockquote>
                  <p className="mb-4">Cascadia Digital has the tools to help you get the
                    website solution you really need to help your business succeed
                  </p>
                  <span className="text-sm italic">&mdash; Zach, Domain7</span>
                </blockquote>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <blockquote>
                  <p className="mb-4">Cascadia Digital has the tools to help you get the
                    website solution you really need to help your business succeed
                  </p>
                  <span className="text-sm italic">&mdash; Zach, Domain7</span>
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
