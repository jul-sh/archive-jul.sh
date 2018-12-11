import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '~/components/Layout'
import PageWrapper from '~/components/PageWrapper'
import Link from '~/components/Link'

const Projects = styled.div`
  column-count: 2;
  column-gap: 1em;

  @media (max-width: 700px) {
    column-count: 1;
    column-gap: 0;
  }
`

const ProjectWrapper = styled.div`
  margin: 0 0 2em;
  break-inside: avoid;
  display: inline-block;
  width: 100%;
`

// By using positon: relative we define the limit of the overflowing link
const ImageTitleWrapper = styled.div`
  position: relative;
`

// To maintain a solid a11y tree the link only contains the title, but overflows
// to make the image clickable as well.
const OverflowingLink = styled(Link)`
  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }

  text-decoration: none;
  margin: 0.5em 0 0.25em 0;
  display: inline-block;
  color: var(--pink);
  border-bottom: none;
  font-size: 1.75rem;
  font-weight: bold;
  word-spacing: -0.3ch;

  :hover {
    border-bottom: none;
  }

  @media print {
    word-spacing: initial;
  }
`

const Title = styled.h3`
  margin: 0;
`

const Description = styled.p`
  font-size: smaller;
  margin: 0;
`

const ToolsUsed = styled.span`
  color: var(--gray);
  font-size: smaller;
  display: inline-block;
  margin-bottom: 1rem;
`

interface IndexPageProps {
  data: any
  location: {
    pathname: string
  }
}

const IndexPage: React.FunctionComponent<IndexPageProps> = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout pathname={props.location.pathname}>
      <PageWrapper>
        <Projects>
          {posts
            .filter((post: any) =>
              post.node.fields.slug.startsWith('/projects/')
            )
            .map(({ node: post }: any) => {
              return (
                <ProjectWrapper key={post.id}>
                  <ImageTitleWrapper>
                    <Img
                      fadeIn={false}
                      sizes={{
                        ...post.frontmatter.featuredImage.childImageSharp.sizes,
                        base64:
                          post.frontmatter.featuredImage.childImageSharp.sqip
                            .dataURI
                      }}
                    />
                    <Title>
                      <OverflowingLink
                        to={post.frontmatter.link || post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </OverflowingLink>
                    </Title>
                  </ImageTitleWrapper>
                  <ToolsUsed>{post.frontmatter.tools}</ToolsUsed>
                  <Description>{post.frontmatter.intro}</Description>
                </ProjectWrapper>
              )
            })}
        </Projects>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage

export const projectQuery = graphql`
  query ProjectsOverviewQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tools
            templateKey
            intro
            link
            featuredImage {
              childImageSharp {
                sqip(numberOfPrimitives: 24, blur: 0, width: 256) {
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
    }
  }
`
