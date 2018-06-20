import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Navbar from 'components/Navbar'
import 'style/index.scss'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Juliette Pretot</title>
      <meta name="description" content="Frontend Engineer" />
      <meta name="theme-color" content="#000615" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Helmet>
    <Navbar />
    <main className="main">{children}</main>
  </Fragment>
)

export default TemplateWrapper
