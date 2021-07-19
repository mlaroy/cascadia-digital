import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Link from 'gatsby-link';
import wordpress from '../images/wordpress.svg';
import jamStack from '../images/static.svg';
import performance from '../images/performance.svg';
import programmer from '../images/programmer.svg';
import accessibility from '../images/accessibility.svg';
import ecommerce from '../images/ecommerce.svg';
import gatsby from '../images/gatsby.svg';
import landingPage from '../images/landing-page.svg';
import developer from '../images/developer.svg'

const ServiceTeaser = () => (
  <StaticQuery
    query={SERVICE_TEASER_QUERY}
    render={({allMarkdownRemark}) => (
      <>
          {allMarkdownRemark.edges.map(edge => {
            const { title, description, img, published } = edge.node.frontmatter;
            // console.log(edge.node.frontmatter);
            const image = getImage(img);

            if( published ) {
              return(
                <li key={title} className="flex flex-col service-item shadow p-8 rounded-sm bg-white">
                  <div className="service-item-img-container">
                    <img src={image} alt="" className="block mb-4 w-1/2 md:w-auto" />
                  </div>
                  <div className="md:flex flex-col justify-between">
                    <h2 className="text-3xl md:text-4xl leading-normal">
                      {/* <Link to={`/services${slug}`} className="no-underline text-black hover:text-blue">{title}</Link> */}
                      {title}
                    </h2>
                    <p className="mb-4 text-lg sm:text-xl leading-normal">{description}</p>
                    {/* <p className="mb-4"><strong>Starts at $10,000</strong></p> */}
                    {/* <Link to={`/services/${slug}`} className="button button--small">Learn more</Link> */}
                  </div>
                </li>
              );
            } else {
              return false;
            }
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
    case 'gatsby':
      return gatsby;
    case 'programmer':
      return programmer;
    case 'landing-page':
      return landingPage;
    case 'developer':
      return developer;
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
              description
              img
              published
            }
          }
      }
    }
  }
`

export default ServiceTeaser;
