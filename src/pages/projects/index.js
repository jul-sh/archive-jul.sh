import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Link from 'components/Link'
import Layout from 'components/Layout'
import './styles.css'

const IndexPage = props => {
  const { data } = props
  const { transition } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <section
        className="page"
        style={transition ? transition.style : undefined}
      >
        <div className="container projects">
          {posts
            .filter(post => post.node.frontmatter.path.includes('/projects/'))
            .map(({ node: post }) => {
              return (
                <div className="project-thumbnail" key={post.id}>
                  <div className="link-overflow-limit">
                    <Img
                      fadeIn={false}
                      sizes={{
                        ...post.frontmatter.featuredImage.childImageSharp.sizes,
                        base64:
                          post.frontmatter.featuredImage.childImageSharp.sqip
                            .dataURI
                      }}
                    />
                    <h3>
                      <Link
                        className="title project-link"
                        to={post.frontmatter.link || post.frontmatter.path}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                  </div>
                  <p className="description">{post.frontmatter.intro}</p>
                </div>
              )
            })}
        </div>
      </section>
    </Layout>
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
                sqip(numberOfPrimitives: 24, blur: 0, width: 256) {
                  dataURI
                  svg
                }
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
