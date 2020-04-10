import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '~/components/Layout'
import PageWrapper from '~/components/PageWrapper'
import MarkdownWrapper from '~/components/MarkdownWrapper'
import styled from 'styled-components'

const StyledPageWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  max-width: 42.5em;

  @media (max-width: 900px) {
    display: block;
  }

  @media print {
    max-width: 100%;
  }
`

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
    margin: 0;
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

const Page: React.FunctionComponent<{
  data: any // type checked by GraphQL
  location: {
    pathname: string
  }
}> = ({
  data: {
    markdownRemark: {
      frontmatter: { title, featuredImage },
      html
    }
  },
  location: { pathname }
}) => (
  <Layout pathname={pathname}>
    <StyledPageWrapper>
      <ImageWrapper>
        <StyledImage
          placeholderStyle={{}}
          fadeIn={false}
          sizes={{
            ...featuredImage.childImageSharp.sizes,
            base64: featuredImage.childImageSharp.sqip.dataURI
          }}
        />
      </ImageWrapper>
      <div>
        <h1>{title}</h1>
        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </StyledPageWrapper>
  </Layout>
)

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
