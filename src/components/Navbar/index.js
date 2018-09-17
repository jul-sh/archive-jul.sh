import React from 'react'
import NavbarLink from 'components/NavbarLink'
import meImg from 'img/me.svg'
import workImg from 'img/work.svg'
import mailImg from 'img/mail.svg'
import 'style/navbar.css'

const Navbar = props => (
  <nav className="navbar-wrapper">
    <div className="navbar">
      <NavbarLink
        to="/"
        icon={meImg}
        name="ABOUT"
        label="About"
        activeName={props.activeName}
      />
      <NavbarLink
        to="/projects"
        icon={workImg}
        name="PROJECTS"
        label="Projects"
        activeName={props.activeName}
      />
      <NavbarLink
        to="/contact"
        icon={mailImg}
        name="CONTACT"
        label="Contact"
        activeName={props.activeName}
      />
    </div>
  </nav>
)

export default Navbar
