const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: `Juliette Pretot`,
    siteUrl: `juliette.sh`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
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
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: 'custom-block-danger',
                info: 'custom-block-info'
              }
            }
          },
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
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `UA-114992563-1`
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Juliette Pretot',
        short_name: 'Juliette',
        description: `Juliette's Portfolio`,
        start_url: '/',
        background_color: '#000615',
        theme_color: '#000615',
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()]
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-offline`
  ]
}
