import React from 'react'
import parseEmoji from 'helpers/emoji'

const ProjectPage = props => {
  const { markdownRemark: post } = props.data
  const { transition } = props
  return (
      <div style={transition && transition.style}>
        <div className="page article">
          <h1 className="title1 under-back">
            {parseEmoji(post.frontmatter.title)}
          </h1>
          {post.frontmatter.intro && (
            <span className="intro">{parseEmoji(post.frontmatter.intro)}</span>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
  )
}

export default ProjectPage

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
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
