import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import og from '../images/og.png'

import Header from './header'
import Footer from './footer'
import '../app.css'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            url
            metaImage
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Cascadia Digital is your trusted web development partner  |  Vancouver - Fraser Valley ' },
            { name: 'keywords', content: 'Web Development, front-end, WordPress, blog, JavaScript, React, Vue, Fraser Valley, Abbotsford, Vancouver, Gatsby, Accessiblity' },
            {
              property: `og:title`,
              content: data.site.siteMetadata.title
            },
            {
              property: `og:image`,
              content: data.site.siteMetadata.url + data.site.siteMetadata.metaImage
            },
            {
              property: `og:url`,
              content: data.site.siteMetadata.url
            },
            {
              property: `og:image:url`,
              content: data.site.siteMetadata.url + data.site.siteMetadata.metaImage
            },
            {
              property: `og:image:secure_url`,
              content: data.site.siteMetadata.url + data.site.siteMetadata.metaImage
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
