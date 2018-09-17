import React from 'react'
import Navbar from 'components/Navbar'
import 'style/normalize.css'
import 'style/custom-properties.css'
import 'style/custom-properties.css'
import 'style/index.css'

const Layout = props => (
  <div>
    <Navbar activeName={props.activeName} />
    <main className="main">{props.children}</main>
  </div>
)

export default Layout
