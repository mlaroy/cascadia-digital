import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import og from '../images/og.png'

import Header from './header'
import Footer from './footer'
import '../app.css'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "legalName": "Cascadia Digital Inc.",
  "name": "Cascadia Digital",
  "url": "https://cascadia.digital",
  "logo": "https://cascadia.digital/public/images/cascadia-logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "email": "info@cascadia.digital",
    "contactType": "information"
  }],
  "sameAs": [
    "https://instagram.com/cascadiadigital",
    "https://twitter.com/digitalcascadia"
  ]
};

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
            metaImage
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'Web Development, front-end, WordPress, blog, JavaScript, React, Vue, Fraser Valley, Abbotsford, Vancouver, Gatsby, Accessiblity' },
            {
              property: `og:title`,
              content: data.site.siteMetadata.title
            },
            {
              property: `og:image`,
              content: data.site.siteMetadata.siteUrl + data.site.siteMetadata.metaImage
            },
            {
              property: `og:url`,
              content: data.site.siteMetadata.siteUrl
            },
            {
              property: `og:image:url`,
              content: data.site.siteMetadata.siteUrl + data.site.siteMetadata.metaImage
            },
            {
              property: `og:image:secure_url`,
              content: data.site.siteMetadata.siteUrl + data.site.siteMetadata.metaImage
            },
            {
              property: `og:image:width`,
              content: `472 × 247`,
            },
            {
              property: `og:image:height`,
              content: `472 × 247`,
            },
            {
              property: `og:image:type`,
              content: `image/png`,
            },
          ]}
        >
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main id="main-content">
            {props.children}
          </main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
