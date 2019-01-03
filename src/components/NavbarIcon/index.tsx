import styled from 'styled-components'

const NavbarIcon = styled.svg`
  display: block;
  width: 1.3em;
  height: 1.3em;
  filter: saturate(95%) opacity(95%);
  margin-bottom: 0.5rem;
  transition: all 100ms ease-in-out;

  @media (max-width: 700px) {
    margin-bottom: 0.4rem;
  }
`

export default NavbarIcon
