import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout'
import Section from '../components/section'
// import Helmet from 'react-helmet';



class ServiceLayout extends Component {
  render() {
    const { data } = this.props;
    console.log(this.props);
    return(
      <Layout>
        <Section>
          <div>
            <h1>
              {data.file.childMarkdownRemark.frontmatter.title}
            </h1>
          </div>
        </Section>
      </Layout>
    )
  }
};

export const query = graphql`
  query SerivcePost($id: String!) {
   site {
     siteMetadata {
       title
     }
   }
   file(id: {
      eq: $id
    }) {
      childMarkdownRemark {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default ServiceLayout;