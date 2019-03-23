import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../app.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Cascadia Digial | Vancouver - Fraser Valley web development partner | Abbotsford' },
            { name: 'keywords', content: 'Web Development, front-end, WordPress, blog, JavaScript, React, Vue, Fraser Valley, Abbotsford, Vancouver, Gatsby, Accessiblity' },
            {
              property: `og:title`,
              content: data.site.siteMetadata.title
            },
            {
              property: `og:image`,
              content: `${data.site.siteMetadata.url}/static/og-fab26ba0f0fdb1208debc35481d52c88.jpg`
            },
            {
              property: `og:url`,
              content: data.site.siteMetadata.url
            },
            {
              property: `og:image:url`,
              content: `${data.site.siteMetadata.url}/static/og-fab26ba0f0fdb1208debc35481d52c88.jpg`,
            },
            {
              property: `og:image:secure_url`,
              content: `${data.site.siteMetadata.url}/static/og-fab26ba0f0fdb1208debc35481d52c88.jpg`,
            },
            {
              property: `og:image:type`,
              content: `image/jpg`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main id="main-content">
            {children}
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
