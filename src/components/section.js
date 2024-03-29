import React from 'react'

const Section = props =>  {
  const css = props.className || '';
  const className = `container relative md:mx-auto px-4 py-16 w-full md:py-24 ${css}`;

  return (
    <section className={className}>
      {props.children}
    </section>
  );
};

export default Section;
