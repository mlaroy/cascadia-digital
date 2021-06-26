import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
// import notFound from '../images/not-found.svg'
// import NewsletterForm from '../components/newsletterForm';
import bg from '../images/snow-capped-mountains-seen-through-the-trees-min.jpg';

const NotFoundPage = () => (
  <Layout full={true}>
    <Hero
      title="Page not found"
      bg={bg}
      full={true}
    >

      {/* <NewsletterForm
        url="1774006"
        buttonText="Subscribe"
        flex="true">
        <h2 className="text-2xl mt-2 mb-2 text-white">Subscribe to my mailing list</h2>
      </NewsletterForm> */}
    </Hero>
  </Layout>
)

export default NotFoundPage
