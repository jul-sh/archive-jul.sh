import React from 'react'
import { graphql } from 'gatsby'
import BackToPrevious from '~/components/BackToPrevious'

const ProjectPage = props => {
  const { transition, data } = props
  const { markdownRemark: post } = data

  return (
    <div style={transition && transition.style} className="page article">
      <BackToPrevious to="/projects" label="projects" />
      <h1 className="title1 under-back">{post.frontmatter.title}</h1>
      {post.frontmatter.intro && (
        <span className="intro">{post.frontmatter.intro}</span>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default ProjectPage

export const projectQuery = graphql`
  query ProjectByslug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        intro
        title
        backTo
        backLabel
      }
    }
  }
`
