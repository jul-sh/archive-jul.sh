import React from 'react'
import { withRouter } from 'react-router-dom'
import meImg from 'img/me.png'
import workImg from 'img/work.png'
import blogImg from 'img/blog.png'
import mailImg from 'img/mail.png'
import Link from 'components/Link'
import 'style/navbar.scss'

const Navbar = props => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <Link
          className="navbar-item"
          isActive={(match, location) =>
            match || location.pathname.startsWith('/about')
          }
          activeClassName="active"
          exact
          to="/"
        >
          <div className="navbar-item-content">
            <img
              className="nav-icon"
              alt="Person with computer emoji"
              src={meImg}
            />
            <span className="nav-caption">About</span>
          </div>
        </Link>
        <Link className="navbar-item" activeClassName="active" to="/projects">
          <div className="navbar-item-content">
            <img className="nav-icon" alt="Rocket Emoji" src={workImg} />
            <span className="nav-caption">Projects</span>
          </div>
        </Link>
        <Link className="navbar-item" activeClassName="active" to="/blog">
          <div className="navbar-item-content">
            <img className="nav-icon" alt="Notebook Emoji" src={blogImg} />
            <span className="nav-caption">Blog</span>
          </div>
        </Link>
        <Link className="navbar-item" activeClassName="active" to="/contact">
          <div className="navbar-item-content">
            <img className="nav-icon" alt="Mailbox Emoji" src={mailImg} />
            <span className="nav-caption">Contact</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
