import React from 'react'
import { graphql } from 'gatsby'
import BackToPrevious from 'components/BackToPrevious'
import './styles.css'

const TemplateBasic = props => {
  const { data, transition } = props
  const { markdownRemark: post } = data
  const { backTo, backLabel } = post.frontmatter

  return (
    <div className="page" style={transition ? transition.style : undefined}>
      {!!backTo &&
        backLabel && <BackToPrevious to={backTo} label={backLabel} />}
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export default TemplateBasic

export const TemplateBasicQuery = graphql`
  query TemplateBasic($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            sqip(numberOfPrimitives: 50, blur: 0, width: 400) {
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
`
