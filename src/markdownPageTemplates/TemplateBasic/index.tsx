import React from 'react'
import { graphql } from 'gatsby'
import Layout from '~/components/Layout'
import PageWrapper from '~/components/PageWrapper'
import MarkdownWrapper from '~/components/MarkdownWrapper'
import BackToPrevious from '~/components/BackToPrevious'

const TemplateBasic: React.FunctionComponent<{
  data: any // type checked by GraphQL
  location: {
    pathname: string
  }
}> = ({
  data: {
    markdownRemark: {
      frontmatter: { backTo, backLabel, title },
      html
    }
  },
  location: { pathname }
}) => (
  <Layout pathname={pathname}>
    <PageWrapper>
      {!!backTo && backLabel && (
        <BackToPrevious to={backTo} label={backLabel} />
      )}
      <div>
        <h1>{title}</h1>
        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </PageWrapper>
  </Layout>
)

export default TemplateBasic

export const TemplateBasicQuery = graphql`
  query TemplateBasic($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        backTo
        backLabel
        featuredImage {
          childImageSharp {
            sqip(numberOfPrimitives: 50, blur: 0, width: 400) {
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
`
