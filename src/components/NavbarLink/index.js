import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import './styles.css'

const NavbarLink = props => (
  <Location>
    {({ location: { pathname } }) => {
      const isActive = !!props.match && props.match.test(pathname)

      return (
        <Link
          className="navbar-item"
          data-styles={isActive && 'isActive'}
          to={props.to}
        >
          <div className="navbar-item-content">
            <img
              className="nav-icon"
              data-styles={isActive && 'isActive'}
              alt=""
              src={props.icon}
            />
            <span className="nav-caption" data-styles={isActive && 'isActive'}>
              {props.label}
            </span>
          </div>
        </Link>
      )
    }}
  </Location>
)

export default NavbarLink
