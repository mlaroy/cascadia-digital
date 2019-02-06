import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <div className="md:mx-auto md:w-5/6 p-4 mt-32">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/" className="link">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
