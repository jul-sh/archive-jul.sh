import React from 'react'
import { Link } from 'gatsby'

const urlMatcher = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/
const isUrl = (url: string) => urlMatcher.test(url)

interface LinkProps {
  to: string
}

const CustomLink: React.FunctionComponent<LinkProps> = ({ to }) =>
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  isUrl(to) ? <a href={to} /> : <Link to={to} />

export default CustomLink
