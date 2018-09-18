import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

const BackToPrevious = props => (
  <Link
    to={props.to}
    className="back"
    aria-label={props.label ? `Back to ${props.label}` : 'Back'}
  >
    <span aria-hidden>{'< '}</span>
    {`Back ${props.label ? 'to ' + props.label : ''}`}
  </Link>
)

export default BackToPrevious
