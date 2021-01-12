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
            <img src={team} className="mb-4 w-1/2 md:w-2/3 mx-auto" alt="" width="389" height="300"/>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-8 leading-none">
              Work with Cascadia Digital
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-normal mb-8">
              Are you ready to get your project started?
            </p>
            <p>
              <Link to="/book-a-consultation" className="button hover:bg-lighter-blue shadow">
                Book a Consultation
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );

};

export default ContactBumper;
