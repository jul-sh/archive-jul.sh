import React from 'react'
import { Link } from 'gatsby'

const isUrl = (url: string) =>
  /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(url)

const CustomLink: React.FunctionComponent<{
  to: string
  className?: string
}> = ({ to, className, children }) =>
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
