import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import wordpress from '../images/wordpress.svg';
import jamStack from '../images/static.svg';
import performance from '../images/performance.svg';
import programmer from '../images/programmer.svg';
import accessibility from '../images/accessibility.svg';

const ServiceTeaser = () => (
  <StaticQuery
    query={SERVICE_TEASER_QUERY}
    render={({allMarkdownRemark}) => (
      <>
          {allMarkdownRemark.edges.map(edge => {
            const { title, description, slug, image } = edge.node.frontmatter;
            const img = getImage(image);
            return(
              <div key={title} className="flex flex-col md:flex-row service-item">
                <div className="md:w-1/3 md:mr-16">
                  <img src={img} width="300" className="block mb-4 w-1/2 md:w-auto" />
                </div>
                <div className="md:w-2/3 md:flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl leading-normal">{title}</h3>
                  <p className="mb-4 text-lg sm:text-xl">{description}</p>
                  {/* <p className="mb-4"><strong>Starts at $10,000</strong></p> */}
                  {/* <Link to={`/services/${slug}`} className="button button--small">Learn more</Link> */}
                </div>
              </div>
            );
          })}
      </>
    )}
  />
)

const getImage = img => {
  switch(img) {
    case 'wordpress':
      return wordpress;
    case 'static':
      return jamStack;
    case 'performance':
      return performance;
    case 'accessibility':
      return accessibility;
    case 'programmer':
      return programmer;
    default:
      return wordpress;

  }
}


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
              image
            }
          }
      }
    }
  }
`

export default ServiceTeaser;