/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// exports.createPages = ({ graphql, actions}) => {

//   const { createPage } = actions;

//   return new Promise( (resolve, reject) => {
//     graphql(`
//       {
//         allFile{
//             edges {
//               node {
//                 id
//                 childMarkdownRemark {
//                   frontmatter {
//                     slug
//                     type
//                   }
//                 }
//               }
//             }
//           }
//         }
//     `).then(results => {
//       const posts = results.data.allFile.edges;
//       posts.forEach( ({node}) => {
//         const { slug, type } = node.childMarkdownRemark.frontmatter
//         const layout = `${type}Layout.js`;
//         createPage({
//           path: `/${type}${slug}`,
//           component: path.resolve(`./src/components/${layout}`),
//           context: {
//             id: node.id,
//           }
//         })
//         resolve();
//       })
//     })
//   });
// };