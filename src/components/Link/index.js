import React from 'react'
import Link from 'gatsby-link'

const urlMatcher = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/
const isUrl = url => urlMatcher.test(url)

const CustomLink = ({ to, ...otherProps }) =>
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  isUrl(to) ? <a href={to} {...otherProps} /> : <Link to={to} {...otherProps} />

export default CustomLink
