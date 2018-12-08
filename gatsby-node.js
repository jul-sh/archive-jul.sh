const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const MARKDOWN_PAGE_TEMPLATES_FOLDER = './src/markdownPageTemplates'

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ node, getNode })
    const slug = filePath === '/index/' ? '/' : filePath

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) =>
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(
        `${MARKDOWN_PAGE_TEMPLATES_FOLDER}/${String(
          node.frontmatter.templateKey
        )}/index.js`
      ),
      context: { slug: node.fields.slug }
    })
  )
}
