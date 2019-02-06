import React from 'react'
import { Link } from 'gatsby'
import CascadiaPng from '../images/cascadia_indigo.png'
import Section from './section'

const Hero = () => (
  <div className="hero text-jp-indigo bg-white">
    <Section className="p-4 text-center fadeIn">
      <h1 className="mb-8">
        <img src={CascadiaPng} alt="Cascadia Digial" width="350" />
      </h1>
      <p className="text-3xl pb-8 italic mb-4">Fraser Valley web development.</p>
      <Link to="/page-2/" className="button hover:bg-jp-indigo shadow">Learn more</Link>
    </Section>
  </div>
)

export default Hero