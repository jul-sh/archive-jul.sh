import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { IconProps } from '~/components/Icons/types'

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
  padding: 0.27rem 0.55rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.4rem;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: var(--blue);
  }

  @media (max-width: 1100px) {
    width: 2ch;
    padding: 0.27rem 1.5rem;
  }

  ${({ isActive }: { isActive: Boolean }) =>
    isActive &&
    css`
      color: var(--blue);
    `}

  @media (max-width: 700px) {
    padding: 0.28rem 1.3rem;
    margin: 0.25rem 0;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Caption = styled.span`
  font-size: 0.6rem;
  text-transform: uppercase;
  display: block;

  @media (max-width: 700px) {
    font-size: 0.65rem;
  }
`

const NavbarLink: React.FunctionComponent<{
  isActive: boolean
  to: string
  label: string
  Icon: (props: IconProps) => JSX.Element
}> = ({ isActive, to, label, Icon }) => (
  <StyledLink isActive={isActive} to={to}>
    <InnerWrapper>
      {Icon({ isFilled: isActive })}
      <Caption>{label}</Caption>
    </InnerWrapper>
  </StyledLink>
)

export default NavbarLink
