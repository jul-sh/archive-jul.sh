import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '~/components/Layout'
import './styles.css'

const Page = props => {
  const { data } = props
  const { markdownRemark: post } = data

  return (
    <Layout pathname={props.location.pathname}>
      <div className="page index">
        <div className="index-me-wrapper">
          <Img
            fadeIn={false}
            className="index-me"
            sizes={{
              ...post.frontmatter.featuredImage.childImageSharp.sizes,
              base64:
                post.frontmatter.featuredImage.childImageSharp.sqip.dataURI
            }}
          />
        </div>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Page

export const PageQuery = graphql`
  query Page($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            sqip(numberOfPrimitives: 75, blur: 0, width: 400) {
              dataURI
              svg
            }
            sizes(maxWidth: 1000, quality: 75) {
              ...GatsbyImageSharpSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
