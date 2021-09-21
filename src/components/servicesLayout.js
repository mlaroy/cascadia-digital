import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout'
import Section from '../components/section'
import Hero from './hero';
import ContactBumper from '../components/contactBumper';
import { getImage } from '../utilities/imageHelpers';
// import Helmet from 'react-helmet';



class ServiceLayout extends Component {
  render() {
    const { data } = this.props;
    const image = getImage(data.markdownRemark.frontmatter.img);
    const { stripeLink } = data.markdownRemark.frontmatter;
    return(
      <Layout>
        <Hero
          subTitle={data.markdownRemark.frontmatter.type}
          title={data.markdownRemark.frontmatter.title}
          img={image}
          imgAlt="woman holding magnifying glass over illustrated web browser"
          >
            <p className="mb-12">{data.markdownRemark.frontmatter.description}</p>
            <a href={stripeLink} className="button button-small">Buy now for {data.markdownRemark.frontmatter.price}</a>
        </Hero>
        <div className="bg-grey-lightest">
          <Section>
            <div className="md:w-2/3 mx-auto">
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
              <a href={stripeLink} className="button button-small">Buy now for {data.markdownRemark.frontmatter.price}</a>
            </div>
          </Section>
        </div>
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
      html
      frontmatter {
        title
        type
        slug
        description
        price
        img
        stripeLink
      }
    }
  }
`

export default ServiceLayout;
