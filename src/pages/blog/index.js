import React from 'react'
import Link from 'components/Link'
import Helmet from 'react-helmet'
import parseEmoji from 'helpers/emoji'
import 'style/blog.scss'

const IndexPage = props => {
  const { data } = props
  const { transition } = props
  const { edges: posts } = data.allMarkdownRemark
  return (
    <section className="page" style={transition && transition.style}>
      <div className="containexr">
        {posts
          .filter(post => post.node.frontmatter.path.includes('/blog/'))
          .map(({ node: post }) => {
            return (
              <div className="blog-post-card" key={post.id}>
                <div>
                  <h3>
                    <Link className="title" to={post.frontmatter.path}>
                      {parseEmoji(post.frontmatter.title)}
                    </Link>
                  </h3>
                  <small className="date">{post.frontmatter.date}</small>
                </div>
                <p>{parseEmoji(post.frontmatter.intro)}</p>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query BlogOverviewQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            intro
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
