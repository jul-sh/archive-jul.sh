import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'
import Helmet from 'react-helmet'
import Navbar from 'components/Navbar'
import 'style/index.scss'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet>
      <title>Juliette Pretot</title>
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="theme-color" content="#000615" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Helmet>
    <Navbar />
    <main className="main">{children()}</main>
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
