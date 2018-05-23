import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import AppHeader from 'components/AppHeader'
import parseEmoji from 'helpers/emoji'

const ProjectPage = props => {
  const { markdownRemark: post } = props.data
  const { data } = props
  const { transition } = props
  return (
    <Fragment>
      <Helmet title={`${post.frontmatter.title}`} />
      <AppHeader title={post.frontmatter.title} />
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
    </Fragment>
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
