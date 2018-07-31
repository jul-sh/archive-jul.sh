import React, { Fragment } from 'react'
import Navbar from 'components/Navbar'
import 'style/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <main className="main">{children()}</main>
  </div>
)

export default TemplateWrapper
