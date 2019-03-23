import React, { Component } from 'react';
import Section from './section';

class Hero extends Component {
  render() {
    const { title, copy, children } = this.props;
    return (
      <Section>
        <div className="md:text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl">{title}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl">
            {children}
          </p>
        </div>
      </Section>
    );
  }
}

export default Hero;