import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Link from 'gatsby-link';
import { getImage } from '../utilities/imageHelpers';

const ServiceTeaser = () => (
  <StaticQuery
    query={SERVICE_TEASER_QUERY}
    render={({allMarkdownRemark}) => (
      <>
          {allMarkdownRemark.edges.map(edge => {
            const { title, description, img, published, price, hasPage, slug, type } = edge.node.frontmatter;
            // console.log(edge.node.frontmatter);
            const image = getImage(img);
            console.log({image});

            if( published ) {
              return(
                <li key={title} className="flex flex-col service-item shadow p-8 rounded-sm bg-white">
                  <div className="service-item-img-container">
                    <img src={image} alt="" className="block mb-4 w-1/2 md:w-auto" />
                  </div>
                  <div className="md:flex flex-col justify-between">
                    <h2 className="text-3xl md:text-4xl leading-normal mb-1">
                      {/* <Link to={`/services${slug}`} className="no-underline text-black hover:text-blue">{title}</Link> */}
                      {title}
                    </h2>
                    {price && <p className="mb-8 text-xl sm:text-xl leading-normal font-bold">{price}</p>}
                    <p className="mb-8 text-lg sm:text-xl leading-normal">{description}</p>
                    {hasPage && (
                      <p>
                        <a href={`/${type}${slug}`} className="button button--small">Find out more</a>
                      </p>
                    )}
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

// const getImage = img => {
//   switch(img) {
//     case 'wordpress':
//       return wordpress;
//     case 'static':
//       return jamStack;
//     case 'performance':
//       return performance;
//     case 'accessibility':
//       return accessibility;
//     case 'search':
//       return search;
//     case 'gatsby':
//       return gatsby;
//     case 'programmer':
//       return programmer;
//     case 'landing-page':
//       return landingPage;
//     case 'developer':
//       return developer;
//     case 'ecommerce':
//         return ecommerce;
//     default:
//       return wordpress;

//   }
// }


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
              price
              slug
              type
              hasPage
            }
          }
      }
    }
  }
`

export default ServiceTeaser;
