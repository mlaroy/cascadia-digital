import React from 'react'
import { Link } from 'gatsby'
import servicesSVG from '../images/services.svg'
import Section from './section'

const ServicesBumper = props => {
  const { className } = props;
  const css = `${className}`;
  return (
    <div className={css}>
      <Section>
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 md:text-center">
            <img src={servicesSVG} className="mb-4 w-1/2 md:w-2/3 mx-auto" alt=""/>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none">
              Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-normal mb-8">
              Get solutions for improving your online presence. <br />
              Find out what services we can offer.
            </p>
            <p>
              <Link to="services" className="button hover:bg-lighter-blue shadow">See services</Link>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );

};

export default ServicesBumper;
