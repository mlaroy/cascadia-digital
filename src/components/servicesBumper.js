import React from 'react'
import { Link } from 'gatsby'
import servicesSVG from '../images/services.svg'
import Section from './section'

const ServicesBumper = props => {
  const { className } = props;
  const css = className || null;
  return (
    <div className={css}>
      <Section>
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 md:text-center">
            <img src={servicesSVG} className="mb-4 w-1/2 md:w-2/3 mx-auto" alt="" width="389" height="300"/>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl mb-8 leading-none">
              How I can help
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-normal mb-8">
              {/* Start your next website project on the right foot. <br className="hidden lg:block" /> */}
              See how you can make your website work for you.
            </p>
            <p>
              <Link to="/services" className="button button--inverse shadow">
                See Services
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );

};

export default ServicesBumper;
