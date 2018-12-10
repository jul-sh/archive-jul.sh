import React from 'react'
import Navbar from '~/components/Navbar'
import '~/style/index.css'
import '~/style/custom-properties.css'

class Layout extends React.Component {
  componentDidMount() {
    if ('standalone' in window.navigator && window.navigator.standalone) {
      document.querySelector('body').setAttribute('data-is-app', 'true')
    }
  }

  render() {
    return (
      <>
        <Navbar pathname={this.props.pathname} />
        <main className="main">{this.props.children}</main>
      </>
    )
  }
}

export default Layout
