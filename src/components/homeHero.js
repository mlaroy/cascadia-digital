import React from 'react'
// import { Link } from 'gatsby'
// import CascadiaPng from '../images/cascadia_indigo.png'
// import cascadiaSVG from '../images/logo_10.png'
import investing from '../images/investing.svg'
import Section from './section'

const Hero = () => (
  <div className="hero">
    <Section className="p-4 fadeIn md:flex items-center justify-center">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={investing} alt="" className="w-2/3"/>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div>
          {/* <h1 className="mb-8">
            <img src={cascadiaSVG} alt="Cascadia Digial" width="350" />
          </h1> */}
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-none">
            Elevate your business.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl">
            Choose Cascadia Digital as your web development partner.
          </p>
        </div>
      </div>
    </Section>
  </div>
)

export default Hero