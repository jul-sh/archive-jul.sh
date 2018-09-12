import React from 'react'
import NavbarLink from 'components/NavbarLink'
import meImg from './me.svg'
import workImg from './work.png'
import mailImg from './mail.svg'
import 'style/navbar.css'

const Navbar = props => (
  <nav className="navbar-wrapper">
    <div className="navbar">
      <NavbarLink
        to="/"
        match={new RegExp('^/$|^/about')}
        icon={meImg}
        label="About"
      />
      <NavbarLink
        to="/projects"
        match={new RegExp('^/projects')}
        icon={workImg}
        label="Projects"
      />
      <NavbarLink
        to="/contact"
        match={new RegExp('^/contact')}
        icon={mailImg}
        label="Contact"
      />
    </div>
  </nav>
)

export default Navbar
