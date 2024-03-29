const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    title: 'Cascadia Digital',
    footerTitle: 'Cascadia Digital Inc.',
    siteUrl: 'https://cascadia.digital',
    twitter: '@digitalcascadia',
    instagram: '@cascadiadigital',
    metaImage: '/images/og-meta.png',
    description: 'Helping help brands get their message out without the friction.'
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     typekit: {
    //       id: 'mtd5qkl'
    //     }
    //   }
    // },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cascadia Digital',
        short_name: 'Cascadia',
        start_url: '/',
        background_color: '#223843',
        theme_color: '#2AACD2',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
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
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     tailwind: true, // Enable tailwindcss support
    //     debug: true,
    //     // ignore: '/node_modules/prismjs/themes/prism-okaidia.css',
    //     content: [
    //       path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')
    //       // path.join(process.cwd(), 'node_modules/prismjs/themes/prism-okaidia.css')
    //     ],
    //     whitelist: [
    //       '.article-body .gatsby-resp-image-wrapper',
    //     ], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify'
  ],
}
