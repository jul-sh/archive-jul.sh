import React from 'react'
import { Link } from 'gatsby'
import 'style/navbar.css'

const BackToPrevious = props => (
  <Link
    {...props}
    className="back"
    aria-label={props.label ? `Back to ${props.label}` : 'Back'}
    onClick={window.history.back}
  >{`< Back ${props.label ? 'to' + props.label : ''}`}</Link>
)

export default BackToPrevious
