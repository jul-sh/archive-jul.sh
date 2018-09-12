import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

const NavbarLink = props => (
  <Location>
    {({ location: { pathname } }) => {
      const isActive = !!props.match && props.match.test(pathname)

      return (
        <Link
          className={`navbar-item ${isActive ? 'active' : ''}`}
          to={props.to}
        >
          <div className="navbar-item-content">
            <img className="nav-icon" alt="" src={props.icon} />
            <span className="nav-caption">{props.label}</span>
          </div>
        </Link>
      )
    }}
  </Location>
)

export default NavbarLink
