import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import Link from 'components/Link'
import parseEmoji from 'helpers/emoji'
import 'style/projects.scss'

const IndexPage = props => {
  const { data } = props
  const { transition } = props
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Fragment>
      <section className="page" style={transition && transition.style}>
        <div className="container projects">
          {posts
            .filter(post => post.node.frontmatter.path.includes('/projects/'))
            .map(({ node: post }) => {
              return (
                <div className="project-thumbnail" key={post.id}>
                  <Link to={post.frontmatter.link || post.frontmatter.path}>
                    <Img
                      sizes={
                        post.frontmatter.featuredImage.childImageSharp.sizes
                      }
                    />
                    <h3 className="title">
                      {parseEmoji(post.frontmatter.title)}
                    </h3>
                  </Link>
                  <p className="description">
                    {parseEmoji(post.frontmatter.intro)}
                  </p>
                </div>
              )
            })}
        </div>
      </section>
    </Fragment>
  )
}

export default IndexPage

export const projectQuery = graphql`
  query ProjectsOverviewQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            intro
            link
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
