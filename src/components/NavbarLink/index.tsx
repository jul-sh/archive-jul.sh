import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

interface NavLinkStyleProps {
  isActive: Boolean
}

const StyledLink = styled(Link)`
  transition: all 100ms ease-in-out;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  color: var(--gray);
  font-weight: bold;
  font-size: 92.5%;
  line-height: 1;
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: hsl(0, 0%, 69%);
  }

  @media (max-width: 1100px) {
    width: 2ch;
    padding: 0.45rem 1.5rem;
  }

  ${(props: NavLinkStyleProps) =>
    props.isActive &&
    css`
      color: var(--blue);

      &:hover {
        color: var(--blue);
        filter: brightness(1.05);
      }
    `}

  @media (max-width: 700px) {
    padding: 0.35rem 1.5rem;
    margin: 0.3rem 0;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Caption = styled.span`
  font-size: 0.95rem;
  text-transform: uppercase;
  display: block;

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`

interface NavLinkComponentProps {
  isActive: Boolean
  to: string
  label: string
  Icon: (props: any) => JSX.Element
}

const NavbarLink: React.FunctionComponent<NavLinkComponentProps> = props => (
  <StyledLink isActive={props.isActive} to={props.to}>
    <InnerWrapper>
      <props.Icon />
      <Caption>{props.label}</Caption>
    </InnerWrapper>
  </StyledLink>
)

export default NavbarLink
