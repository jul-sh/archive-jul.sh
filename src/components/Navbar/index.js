import React from 'react'
import NavbarLink from 'components/NavbarLink'
import AboutIcon from './AboutIcon'
import ProjectsIcon from './ProjectsIcon'
import ContactIcon from './ContactIcon'
import './styles.css'

const Navbar = props => (
  <nav className="navbar-wrapper">
    <div className="navbar">
      <NavbarLink
        to="/"
        match={new RegExp('^/$|^/about')}
        Icon={AboutIcon}
        label="About"
      />
      <NavbarLink
        to="/projects"
        match={new RegExp('^/projects')}
        Icon={ProjectsIcon}
        label="Projects"
      />
      <NavbarLink
        to="/contact"
        match={new RegExp('^/contact')}
        Icon={ContactIcon}
        label="Contact"
      />
    </div>
  </nav>
)

export default Navbar
