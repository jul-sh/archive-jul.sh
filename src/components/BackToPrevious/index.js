import React from 'react'
import Link from 'components/Link'
import 'style/navbar.scss'

const BackToPrevious = props => (
  <Link
    {...props}
    className="back"
    aria-label={`Back to ${props.label}`}
  >{`< Back to ${props.label}`}</Link>
)

export default BackToPrevious
