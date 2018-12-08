import React from 'react'
import NavbarLink from '~/components/NavbarLink'
import AboutIcon from './AboutIcon'
import ProjectsIcon from './ProjectsIcon'
import ContactIcon from './ContactIcon'
import './styles.css'

const Navbar = props => (
  <nav className="navbar-wrapper">
    <div className="navbar">
      <NavbarLink
        to="/"
        isActive={new RegExp('^/$|^/about').test(props.pathname)}
        Icon={AboutIcon}
        label="About"
      />
      <NavbarLink
        to="/projects"
        isActive={new RegExp('^/projects').test(props.pathname)}
        Icon={ProjectsIcon}
        label="Projects"
      />
      <NavbarLink
        to="/contact"
        isActive={new RegExp('^/contact').test(props.pathname)}
        Icon={ContactIcon}
        label="Contact"
      />
    </div>
  </nav>
)

export default Navbar
