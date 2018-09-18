import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import BackToPrevious from 'components/BackToPrevious'

const ProjectPage = props => {
  const { transition, data } = props
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div style={transition && transition.style} className="page article">
        <BackToPrevious to="/projects" label="projects" />
        <h1 className="title1 under-back">{post.frontmatter.title}</h1>
        {post.frontmatter.intro && (
          <span className="intro">{post.frontmatter.intro}</span>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
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
        backTo
        backLabel
      }
    }
  }
`