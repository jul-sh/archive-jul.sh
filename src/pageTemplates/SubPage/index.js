import React from 'react'
import { graphql } from 'gatsby'

const SubPage = props => {
  const { markdownRemark: post } = props.data
  const { transition } = props

  return (
    <div className="page article" style={transition && transition.style}>
      <h1 className="title1 under-back">{post.frontmatter.title}</h1>
      {post.frontmatter.intro && (
        <span className="intro">{post.frontmatter.intro}</span>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default SubPage

export const subPageQuery = graphql`
  query SubPageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        intro
        path
        title
      }
    }
  }
`
