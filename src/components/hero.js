import React, { Component } from 'react';
import Section from './section';

class Hero extends Component {
  render() {
    const { title, children, img } = this.props;
    return (
      <Section>
        {img && (
          <div className="w-2/3 md:w-auto mx-auto">
            <img src={img} alt="" width="320" className="mx-auto block my-8"/>
          </div>
        )}
        <div className="md:text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">{title}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl leading-normal">
            {children}
          </p>
        </div>
      </Section>
    );
  }
}

export default Hero;