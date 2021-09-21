import React, { Component } from 'react';
import Section from './section';

class Hero extends Component {
  render() {
    const { title, subTitle, children, bg, bgAlt = '', img, imgAlt, full = false } = this.props;
    // const fladeClass = fade ? "fadeIn" : '';
    return (
      <div className={`hero relative ${full ? 'min-h-screen' : ''} ${bg ? 'bg-jp-indigo text-white' : ''}`}>
        {bg && (
          <img src={bg} alt={bgAlt} className="hero-bg mx-auto block absolute h-full w-full pin-t z-0 opacity-25" width="1440" height="792"/>
        )}
        <Section className={`pt-24 md:pt-32 ${full ? 'md:mt-16' : ''}`}>
          <div className="md:py-12">
            {img && (
              <div className="w-1/2 md:w-1/3 lg:w-auto mb-8 md:absolute right-0 md:opacity-75 z-10 hero-image">
                <img src={img} alt="" width="320" className="mx-auto block" alt={imgAlt}/>
              </div>
            )}
            <div className={`w-full relative z-20 ${img ? 'lg:w-2/3' : 'md:w-5/6'}`}>
              {subTitle && <p className="font-bold text-sm capitalize mb-4 bg-grey-lightest py-2 px-4 rounded-sm inline-flex">{subTitle}</p>}
              <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${bg ? 'text-white' : ''}`}>{title}</h1>
              {children && (
                <div className={`text-xl sm:text-2xl leading-normal ${bg ? 'text-white' : ''}`}>
                  {children}
                </div>
              )}
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Hero;
