const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Juliette Pretot',
    siteUrl: 'juliette.sh'
  },
  plugins: [
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
              backgroundColor: 'transparent',
              wrapperStyle: 'margin-bottom: 1.5rem'
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe'
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          },
          {
            resolve: 'gatsby-remark-twemoji',
            options: {
              base: '/',
              folder: 'emoji',
              ext: '.svg',
              attributes: () => ({
                class: 'emoji'
              })
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#44B284',
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cache',
    'gatsby-transformer-sqip',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline'
  ]
}
