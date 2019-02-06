import React, { Component } from 'react';
import { Link } from 'gatsby'
import Section from './section'

class Work extends Component {
  render() {
    return (
      <div className="bg-dark-sea-green h-64">
        <Section>
          <h2 className="text-black">Work</h2>
          <Link url="/work">Work</Link>
        </Section>
      </div>
    );
  }
}

export default Work;