import React from 'react'
import { Link } from 'gatsby'

const urlMatcher = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/
const isUrl = (url: string) => urlMatcher.test(url)

const CustomLink: React.FunctionComponent<{
  to: string
  className?: string
  children?: any
}> = ({ to, className, children }) =>
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  isUrl(to) ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  )

export default CustomLink
