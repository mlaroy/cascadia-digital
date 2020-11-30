import React from 'react'
// import { Link } from 'gatsby'
import Section from './section'
import Partners from '../components/partners'

const AgencyBumper = props => {
  const { className } = props;
  const css = className || null;
  return (
    <div className={css}>
      <Section>
        <div className="mx-auto w-full sm:w-5/6 md:w-full lg:w-3/4 px-4 flex flex-col">
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
