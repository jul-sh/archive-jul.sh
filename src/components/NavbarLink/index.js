import React from 'react'
import { Link } from 'gatsby'

const NavbarLink = props => {
  const isActive = props.activeName === props.name
  return (
    <Link className={`navbar-item ${isActive ? 'active' : ''}`} to={props.to}>
      <div className="navbar-item-content">
        <img className="nav-icon" alt="" src={props.icon} />
        <span className="nav-caption">{props.label}</span>
      </div>
    </Link>
  )
}

export default NavbarLink
