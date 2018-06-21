import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import 'style/index.scss'

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Navbar />
    <main className="main">{children()}</main>
  </Fragment>
)

export default TemplateWrapper
