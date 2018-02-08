import React from 'react'
import Link from 'gatsby-link'

const urlMatcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
const isUrl = url => urlMatcher.test(url)

const CustomLink = ({ to, ...otherProps }) =>
  isUrl(to) ? <a href={to} {...otherProps} /> : <Link to={to} {...otherProps} />

export default CustomLink
