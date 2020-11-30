/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions}) => {

  const { createPage } = actions;

  return new Promise( (resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: {
            frontmatter: {
                type: {
                    eq: "services"
                }
            }
            }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                  type
                  order
                  description
                  img
                  published
                }
              }
            }
          }
        }
    `).then(results => {
        const posts = results.data.allMarkdownRemark.edges;
        //   console.log(results.data.allMarkdownRemark.edges[0]);
        posts
            .filter(post => post.node.frontmatter.published == true )
            .forEach( ({node}) => {
                const { slug, type } = node.frontmatter
                const layout = `${type}Layout.js`;
                createPage({
                    path: `/${type}${slug}`,
                    component: path.resolve(`./src/components/${layout}`),
                    context: {
                        id: node.id,
                    }
                })
            })
        resolve();
    })
  });
};
