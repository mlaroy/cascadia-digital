import React, { Component } from 'react'

import Layout from '../components/layout'
import Hero from '../components/homeHero'
import Work from '../components/work'
import Bumper from '../components/bumper'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <div className="h-screen bg-grey-lightest p-4 flex flex-col">
          <div className="md:mx-auto md:w-5/6 px-4 py-16">
            <h2>What we do</h2>
            <p className="text-2xl leading-normal">
              At Cascadia Digital, our focus is on delivering the solution you need. <br />
              Our specialty is in creating dynamic, accessible websites. <br />
              Our passion is helping you achieve your goals.
            </p>
          </div>
        </div>
        <Work />
        <Bumper
          text="See what clients are saying"
          url="/about"
        />
      </Layout>
    );
  }
}

export default IndexPage
