import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';

const WorkTeaser = () => (
  <StaticQuery
    query={WORK_TEASER_QUERY}
    render={({allFile}) => (
      <>
        <div className="flex justify-around">
          {allFile.edges.map(edge => {
            const {title, slug, thumb} = edge.node.childMarkdownRemark.frontmatter;
            const url = `../images/work/${thumb}`;
            return(
              <div key={title}>
                <img src={url} alt=""/>
                <h3 className="text-2xl">{title}</h3>
                <Link to={`/work/${slug}`}>See case study</Link>
              </div>
            );
            })
          }
        </div>
      </>
    )}
  />
)


const WORK_TEASER_QUERY = graphql`
  query SampleWork {
    allFile(
      limit: 3
      filter: {
        sourceInstanceName: {
          eq: "work"
        }
    }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  }
`

export default WorkTeaser;