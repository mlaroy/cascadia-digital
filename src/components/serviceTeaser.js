import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Link from 'gatsby-link';
import wordpress from '../images/wordpress.svg';
import jamStack from '../images/static.svg';
import performance from '../images/performance.svg';
import programmer from '../images/programmer.svg';
import accessibility from '../images/accessibility.svg';
import ecommerce from '../images/ecommerce.svg';

const ServiceTeaser = () => (
  <StaticQuery
    query={SERVICE_TEASER_QUERY}
    render={({allMarkdownRemark}) => (
      <>
          {allMarkdownRemark.edges.map(edge => {
            const { title, description, img } = edge.node.frontmatter;
            const image = getImage(img);
            return(
              <div key={title} className="flex flex-col service-item">
                <div className="service-item-img-container mb-8">
                  <img src={image} alt="" width="200" className="block mb-4 w-1/2 md:w-auto" />
                </div>
                <div className="md:flex flex-col justify-center">
                  <h2 className="text-3xl md:text-5xl leading-normal">{title}</h2>
                  <p className="mb-4 text-lg sm:text-xl sm:text-2xl leading-normal">{description}</p>
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
    case 'ecommerce':
        return ecommerce;
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
              img
            }
          }
      }
    }
  }
`

export default ServiceTeaser;
