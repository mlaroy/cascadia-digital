import React from 'react'

const Section = props =>  {
  const css = props.className || '';
  const className = `md:mx-auto px-4 md:w-5/6 py-16 md:py-24 ${css}`;

  return (
    <section className={className}>
      {props.children}
    </section>
  );
};

export default Section;
