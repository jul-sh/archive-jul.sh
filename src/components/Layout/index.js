import React from 'react'
import Navbar from 'components/Navbar'
import 'style/normalize.css'
import 'style/custom-properties.css'
import 'style/index.css'

class Layout extends React.Component {
  componentDidMount() {
    // iOS workaround: If run in fullscreen, force full height.
    // see https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html
    if ('standalone' in window.navigator && window.navigator.standalone) {
      document.querySelector('body').style.minHeight = '100vh'
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
