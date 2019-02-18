import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const BackLink = styled(Link)`
  text-decoration: none;
  line-height: 2em;
  padding: 0 0.5em;
  border-radius: 4px;
  font-size: 1.25rem;
  border: 1px solid var(--translucentOrange);
  color: var(--orange);
  background-color: var(--lowTranslucentOrange);
  transition-duration: 200ms;
  margin-bottom: 20px;
  display: inline-block;
  font-size: 1.1rem;

  @media print {
    display: none !important;
  }

  :hover {
    border: 1px solid var(--orange);
  }
`

const BackToPrevious: React.FunctionComponent<{
  to: string
  label: string
}> = ({ to, label }) => (
  <BackLink to={to}>
    <span aria-hidden>{'< '}</span>
    {`Back ${label ? `to ${label}` : ''}`}
  </BackLink>
)

export default BackToPrevious
