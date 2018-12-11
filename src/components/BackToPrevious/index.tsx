import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const BackLink = styled(Link)`
  text-decoration: none;
  padding: 0.2em 0.5em;
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

interface BackToPreviousProps {
  to: string
  label: string
}

const BackToPrevious: React.FunctionComponent<BackToPreviousProps> = props => (
  <BackLink
    to={props.to}
    className="back"
    aria-label={props.label ? `Back to ${props.label}` : 'Back'}
  >
    <span aria-hidden>{'< '}</span>
    {`Back ${props.label ? `to ${props.label}` : ''}`}
  </BackLink>
)

export default BackToPrevious
