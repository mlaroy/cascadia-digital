import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout'
import Section from '../components/section'
import Hero from './hero';
import ContactBumper from '../components/contactBumper';
// import Helmet from 'react-helmet';



class ServiceLayout extends Component {
  render() {
    const { data } = this.props;
    // console.log(this.props);
    return(
      <Layout>
        <Hero title={data.markdownRemark.frontmatter.title}>
            {data.markdownRemark.frontmatter.description}
        </Hero>
        <Section>
          <div>
            Content
          </div>
        </Section>
        <ContactBumper />
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
   markdownRemark(id: {
      eq: $id
    }) {
      frontmatter {
        title
        slug
        description
      }
    }
  }
`

export default ServiceLayout;
