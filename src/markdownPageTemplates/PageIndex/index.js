import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '~/components/Layout'
import MarkdownWrapper from '~/components/MarkdownWrapper'
import styled from 'styled-components'
import './styles.css'

const ImageWrapper = styled.div`
  width: 32.5%;
  flex: none;
  margin-right: 1.5em;

  @media (max-width: 900px) {
    float: left;
    width: 40%;
  }

  @media (max-width: 550px) {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0 0 2rem 0;
    float: none;
    right: 0;
  }
`

const StyledImage = styled(Img)`
  max-width: 100%;

  @media (max-width: 550px) {
    margin: -10% 0 -30%;
  }
`

const Page = props => {
  const { data } = props
  const { markdownRemark: post } = data

  return (
    <Layout pathname={props.location.pathname}>
      <div className="page index">
        <ImageWrapper>
          <StyledImage
            fadeIn={false}
            className="index-me"
            sizes={{
              ...post.frontmatter.featuredImage.childImageSharp.sizes,
              base64:
                post.frontmatter.featuredImage.childImageSharp.sqip.dataURI
            }}
          />
        </ImageWrapper>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <MarkdownWrapper dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Page

export const PageQuery = graphql`
  query Page($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            sqip(numberOfPrimitives: 75, blur: 0, width: 400) {
              dataURI
              svg
            }
            sizes(maxWidth: 1000, quality: 75) {
              ...GatsbyImageSharpSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
