const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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
  const MARKDOWN_PAGE_TEMPLATES_FOLDER = './src/markdownPageTemplates'

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

  const isPageNode = ({ node }) => !!node.frontmatter.templateKey

  allMarkdown.data.allMarkdownRemark.edges
    .filter(isPageNode)
    .forEach(({ node: { fields: { slug }, frontmatter: { templateKey } } }) =>
      actions.createPage({
        path: slug,
        component: path.resolve(
          `${MARKDOWN_PAGE_TEMPLATES_FOLDER}/${templateKey}/index.tsx`
        ),
        context: { slug }
      })
    )
}
