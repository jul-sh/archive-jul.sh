import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import './styles.css'

const Page = props => {
  // console.log(props.location)
  const { data, transition } = props
  const { markdownRemark: post } = data

  return (
    <>
      <div
        className="page index"
        style={transition ? transition.style : undefined}
      >
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
    </>
  )
}

export default Page

export const PageQuery = graphql`
  query Page($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
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
