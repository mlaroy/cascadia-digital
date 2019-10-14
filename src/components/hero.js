import React, { Component } from 'react';
import Section from './section';

class Hero extends Component {
  render() {
    const { title, children, img } = this.props;
    return (
      <Section className="fadeIn">
        {img && (
          <div className="w-2/3 md:w-auto mx-auto">
            <img src={img} alt="" width="320" className="mx-auto block my-8"/>
          </div>
        )}
        <div className="md:text-center mb-16">
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          {children && (<p className="text-xl sm:text-2xl lg:text-3xl leading-normal">
            {children}
          </p>
          )}
        </div>
      </Section>
    );
  }
}

export default Hero;
