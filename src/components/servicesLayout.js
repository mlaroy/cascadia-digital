import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout'
import Section from '../components/section'
import Hero from './hero';
import ContactBumper from '../components/contactBumper';
import { getImage } from '../utilities/imageHelpers';
import Helmet from 'react-helmet';



class ServiceLayout extends Component {
  render() {
    const { data } = this.props;
    console.log({ data });
    const image = getImage(data.markdownRemark.frontmatter.img);
    const { stripeLink } = data.markdownRemark.frontmatter;

    const capitalized = str => str.charAt(0).toUpperCase() + str.slice(1);

    return(
      <Layout>
        <Helmet>
          <title>{data.markdownRemark.frontmatter.title} | {capitalized(data.markdownRemark.frontmatter.type)} | Cascadia Digital</title>
          <meta property="description" content={data.markdownRemark.frontmatter.description} />
          <meta property="og:description" content={data.markdownRemark.frontmatter.description} />
          <meta property="og:title" content={`${data.markdownRemark.frontmatter.title} | Cascadia Digital`} />
          <meta property="og:url" content={ data.site.siteMetadata.siteUrl + '/' + data.markdownRemark.frontmatter.type + data.markdownRemark.frontmatter.slug} />
        </Helmet>
        <Hero
          subTitle={data.markdownRemark.frontmatter.type}
          title={data.markdownRemark.frontmatter.title}
          img={image}
          imgAlt="woman holding magnifying glass over illustrated web browser"
          >
            <p className="mb-12">{data.markdownRemark.frontmatter.description}</p>
            <a href={stripeLink} className="button button-small divide-white divide-x-0 divide-opacity-50">
              <span className="pr-4">Buy now</span>
              <span className="pl-4">{data.markdownRemark.frontmatter.price}</span>
            </a>
        </Hero>
        <div className="bg-grey-lightest">
          <Section>
            <div className="md:w-2/3 mx-auto">
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
              <a href={stripeLink} className="button button-small divide-white divide-x-0 divide-opacity-50">
                <span className="pr-4">Buy now</span>
                <span className="pl-4">{data.markdownRemark.frontmatter.price}</span>
              </a>
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
       siteUrl
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
