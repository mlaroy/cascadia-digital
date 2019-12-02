import React from 'react'
import growth from '../images/growth.svg'
import Section from './section'

const HomeHero = () => (
  <div className="hero">
    <Section className="p-4 fadeIn md:flex items-center justify-center">
      <div className="sm:w-2/3 md:w-2/5 flex justify-center items-center">
        <img src={growth} alt="" className="w-2/3 sm:w-3/4 md:mx-auto mb-8 md:mb-0"/>
      </div>
      <div className="md:w-3/5 flex justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
            Fill your agency development needs with Cascadia Digital
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl leading-normal">
            Helping you achieve your business goals
          </p>
        </div>
      </div>
    </Section>
  </div>
);

export default HomeHero
