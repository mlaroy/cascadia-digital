import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'
// import Helmet from 'react-helmet';
import Section from '../components/section'




// class WorkLayout extends Component {
//   render() {
//     const { data } = this.props;
//     console.log(this.props);
//     return(
//       <Layout>
//         <Section>
//           <div>
//             I am a work page
//             {data.file.childMarkdownRemark.frontmatter.title}
//           </div>
//         </Section>
//       </Layout>
//     )
//   }
// };

// export const query = graphql`
//   query WorkPost($id: String!) {
//    site {
//      siteMetadata {
//        title
//      }
//    }
//    file(id: {
//       eq: $id
//     }) {
//       childMarkdownRemark {
//         frontmatter {
//           title
//           slug
//         }
//       }
//     }
//   }
// `

// export default WorkLayout;
