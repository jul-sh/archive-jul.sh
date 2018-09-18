import React from 'react'
import Navbar from 'components/Navbar'
import 'style/custom-properties.css'
import 'style/index.css'

class Layout extends React.Component {
  componentDidMount() {
    if ('standalone' in window.navigator && window.navigator.standalone) {
      document.querySelector('body').setAttribute('data-is-app', 'true')
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <main className="main">{this.props.children}</main>
      </>
    )
  }
}

export default Layout
