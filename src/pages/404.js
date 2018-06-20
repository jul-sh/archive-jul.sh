import React from 'react'
import parseEmoji from 'helpers/emoji'
import Layout from 'components/Layout'

const NotFoundPage = ({ transition }) => (
  <Layout>
    <section className="page" style={transition && transition.style}>
      <h1>{parseEmoji('NOT FOUND 😱')}</h1>
      <p>Something bad happened. But I still love you.</p>
      <div className="button-parent">
        <a className="button" href="/">
          Return to the homepage
        </a>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
