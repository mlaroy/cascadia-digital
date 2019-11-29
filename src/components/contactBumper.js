import React from 'react'
import { Link } from 'gatsby'
import team from '../images/team.svg'
import Section from './section'

const ContactBumper = props => {
  const { className } = props;
  const css = className || null;
  return (
    <div className={css}>
      <Section>
        <div className="md:flex">
          <div className="md:w-1/2 md:text-center">
            <img src={team} className="mb-4 w-1/2 md:w-2/3 mx-auto" alt=""/>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl leading-normal mb-8 leading-none">
              Team up with Cascadia Digital
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-normal mb-8">
              Let's team up to meet your business goals.
            </p>
            <p>
              <Link to="contact" className="button hover:bg-lighter-blue shadow">Schedule your project</Link>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );

};

export default ContactBumper;
