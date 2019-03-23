import React from 'react'
import { Link } from 'gatsby'

import Section from './section'

const Bumper = props => (
  <div className="bg-jp-indigo h-64">
    <Section className="text-center">
      <h3 className="mb-8 text-white">
       {props.text}
      </h3>
      <Link to={props.url} className="button hover:bg-lighter-blue shadow">Learn more</Link>
    </Section>
  </div>
)

export default Bumper;
