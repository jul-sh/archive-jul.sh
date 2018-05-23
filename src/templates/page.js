import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import parseEmoji from 'helpers/emoji'

const Page = props => {
  const { data } = props
  const { transition } = props
  const { markdownRemark: post } = data
  const style = post.frontmatter.style || ''

  return (
    <div style={transition && transition.style} className={style + ' page'}>
      {style === 'index' && (
        <div className="index-me-wrapper">
          {!!post.frontmatter.featuredImage && (
            <Img
              outerWrapperClassName="index-me"
              sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            />
          )}
        </div>
      )}
      <div>
        <h1>{parseEmoji(post.frontmatter.title)}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
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
        style
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
`
