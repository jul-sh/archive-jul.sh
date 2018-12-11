import React from 'react'
import Layout from '~/components/Layout'
import PageWrapper from '~/components/PageWrapper'

const NotFoundPage = props => (
  <Layout pathname={props.location.pathname}>
    <PageWrapper>
      <h1>NOT FOUND</h1>
      <p>Something bad happened. But I still love you.</p>
      <div className="button-parent">
        <a className="button" href="/">
          Return to the homepage
        </a>
      </div>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
