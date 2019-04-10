import React from 'react'
import { Link } from 'gatsby'
import Section from './section'
import Partners from '../components/partners'

const AgencyBumper = props => {
  const { className } = props;
  const css = `${className}`;
  return (
    <div className={css}>
      <Section>
        <div className="md:mx-auto md:w-5/6 px-4 flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal mb-12 text-center leading-none">
            Clients &amp; Agency Partners
          </h2>
          <Partners />
        </div>
      </Section>
    </div>
  );
};

export default AgencyBumper;