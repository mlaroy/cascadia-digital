import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import mark from '../images/cascadia-mark-5.svg'

const ServiceTeaser = () => (
  <StaticQuery
    query={SERVICE_TEASER_QUERY}
    render={({allMarkdownRemark}) => (
      <>
          {allMarkdownRemark.edges.map(edge => {
            const { title, description, slug } = edge.node.frontmatter;
            return(
              <li key={title}>
                {/* <img src={mark} width="50" className="block mb-4" /> */}
                <h2 className="text-2xl sm:text-3xl">{title}</h2>
                <p className="mb-4">{description}</p>
                {/* <p className="mb-4"><strong>Starts at $10,000</strong></p> */}
                <Link to={`/services/${slug}`} className="button button--small">Learn more</Link>
              </li>
            );
          })}
      </>
    )}
  />
)


const SERVICE_TEASER_QUERY = graphql`
  query SampleService {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/services/"} },
      sort: {fields: [frontmatter___order], order: ASC},
    ) {
        edges {
          node {
            frontmatter {
              order
              title
              slug
              description
            }
          }
      }
    }
  }
`

export default ServiceTeaser;