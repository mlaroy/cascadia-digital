import React from 'react'
import { Link } from 'gatsby'
import WorkTeaser from '../components/work-teaser'
import Section from '../components/section'

import Layout from '../components/layout'

const Work = () => (
  <Layout>
    <Section>
      <div className="md:text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl">Work</h1>
        <p className="text-xl sm:text-2xl md:text-3xl">
          Check out some of our projects.
        </p>
      </div>
      <WorkTeaser />
    </Section>
  </Layout>
)

export default Work
