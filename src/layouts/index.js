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
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <Navbar />
    <main className="main">{children()}</main>
  </Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
