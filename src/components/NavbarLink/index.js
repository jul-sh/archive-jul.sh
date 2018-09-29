import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const NavbarLink = props => (
  <Link
    className="navbar-item"
    data-styles={props.isActive ? 'isActive' : undefined}
    to={props.to}
  >
    <div className="navbar-item-content">
      <props.Icon className="nav-icon" />
      <span
        className="nav-caption"
        data-styles={props.isActive ? 'isActive' : undefined}
      >
        {props.label}
      </span>
    </div>
  </Link>
)

export default NavbarLink
