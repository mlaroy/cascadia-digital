import React from 'react'

const Section = props =>  {
  const className = (typeof props.className !== 'undefined') ? `md:mx-auto md:w-5/6 px-4 py-16 ${props.className}` : 'md:mx-auto md:w-5/6 px-4 py-16';

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

export default Section;
