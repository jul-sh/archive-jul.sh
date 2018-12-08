import React from 'react'
import { graphql } from 'gatsby'
import Layout from '~/components/Layout'
import BackToPrevious from '~/components/BackToPrevious'
import './styles.css'

const TemplateBasic = props => {
  const { data } = props
  const { markdownRemark: post } = data
  const { backTo, backLabel } = post.frontmatter

  return (
    <Layout pathname={props.location.pathname}>
      <div className="page">
        {!!backTo && backLabel && (
          <BackToPrevious to={backTo} label={backLabel} />
        )}
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default TemplateBasic

export const TemplateBasicQuery = graphql`
  query TemplateBasic($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        backTo
        backLabel
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
