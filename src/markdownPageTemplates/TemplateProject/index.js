import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '~/components/Layout'
import MarkdownWrapper from '~/components/MarkdownWrapper'
import BackToPrevious from '~/components/BackToPrevious'

const Title = styled.h3`
  font-size: 3rem;
  color: var(--pink);
  margin: 2rem 0;
`

const ProjectPage = props => {
  const { data } = props
  const { markdownRemark: post } = data

  return (
    <Layout pathname={props.location.pathname}>
      <div className="page">
        <BackToPrevious to="/projects" label="projects" />
        <Title>{post.frontmatter.title}</Title>
        {post.frontmatter.intro && <span>{post.frontmatter.intro}</span>}
        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
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
