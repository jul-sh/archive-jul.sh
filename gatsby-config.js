const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Juliette Pretot`,
    siteUrl: `juliette.sh`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, 'src')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
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
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-'
            }
          },
          {
            resolve: `gatsby-remark-twemoji`,
            options: {
              base: '/assets/emoji/',
              folder: 'svg',
              ext: '.svg',
              attributes: () => ({
                style:
                  'height: 1em; width: 1em; margin: 0; vertical-align: -0.07em;'
              })
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#44B284`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Juliette Pretot',
        short_name: 'Juliette',
        start_url: '/',
        background_color: '#000615',
        theme_color: '#000615',
        display: 'standalone',
        icon: 'src/style/logo.png'
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/style/logo.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: true
        }
      }
    },
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-transformer-sqip`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`
  ]
}
