import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import notFound from '../images/not-found.svg'

const NotFoundPage = () => (
  <Layout>
    <Hero title="Not Found" img={notFound}>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Hero>
  </Layout>
)

export default NotFoundPage
