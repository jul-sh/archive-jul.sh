import React from 'react'
import meImg from 'img/me.png'
import workImg from 'img/work.png'
import blogImg from 'img/blog.png'
import mailImg from 'img/mail.png'
import Link from 'components/Link'
import 'style/navbar.scss'

const AppHeader = props => {
  return (
    <div className="appHeader-wrapper">
      <div className="appHeader">
        <a href="javascript:history.back()" className="back">
          ◀︎ Back
        </a>
        <h4 className="headerTitle">{props.title}</h4>
      </div>
    </div>
  )
}

export default AppHeader
