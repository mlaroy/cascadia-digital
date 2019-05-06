const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Cascadia Digital - Helping agencies meet their client needs with expert front-end development',
    footerTitle: 'Cascadia Digital Inc.',
    siteUrl: 'https://cascadia.digital',
    twitter: '@digitalcascadia',
    instagram: '@cascadiadigital',
    metaImage: '/images/cascadia-logo-jpg.jpg',
    description: 'Cascadia Digital is your trusted web development partner. Based in Abbotsford BC, we help you create a strategy to execute on better web experiences. We have experience working in a range of tools and frameworks such as WordPress, Vue, and Laravel, with a focus on the front end.'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'mtd5qkl'
        }
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#003846',
        theme_color: '#2AACD2',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //     {
      //       resolve: `gatsby-remark-images`,
      //       options: {
      //         maxWidth: 1000
      //       }
      //     }
      //   ]
      // }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/work/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/services/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138237217-1',
        cookieDomain: 'cascadia.digital'
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        develop: true,
        debug: true,
        // ignore: '/node_modules/prismjs/themes/prism-okaidia.css',
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')
          // path.join(process.cwd(), 'node_modules/prismjs/themes/prism-okaidia.css')
        ],
        whitelist: [
          '.article-body .gatsby-resp-image-wrapper',
        ], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify'
  ],
}
