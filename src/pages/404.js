import React from 'react'

const NotFoundPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>NOT FOUND 😱</h1>
    <p>Something bad happened. But I still love you.</p>
    <div className="button-parent">
      <a className="button" href="/">
        Return to the homepage
      </a>
    </div>
  </div>
)

export default NotFoundPage
