module.exports = {
  siteMetadata: {
    title: 'Juliette Pretot',
    siteUrl: 'https://jul.sh'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            }
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#44B284',
        showSpinner: false
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cache',
    'gatsby-transformer-sqip',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify' // place as last in the array. ref: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify#how-to-use
  ]
}
