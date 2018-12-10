import React from 'react'
import styled from 'styled-components'
import NavbarLink from '~/components/NavbarLink'
import AboutIcon from './AboutIcon'
import ProjectsIcon from './ProjectsIcon'
import ContactIcon from './ContactIcon'

const NavbarWrapper = styled.nav`
  background-color: hsl(221, 25%, 13%);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-left: var(--responsive-padding);
  padding-right: var(--responsive-padding);
  padding-bottom: var(--safe-area-inset-bottom);

  @supports (padding: max(0px)) {
    padding-left: max(var(--responsive-padding), env(safe-area-inset-left));
    padding-right: max(var(--responsive-padding), env(safe-area-inset-right));
  }

  @media (max-width: 700px) {
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
  }

  @media print {
    display: none !important;
  }

  @supports (
    (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
  ) {
    background-color: hsla(221, 20%, 15%, 0.925);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
`

const InnerNavbarWrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 25em;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  font-family: var(--sansFont);
`

const Navbar = props => (
  <NavbarWrapper>
    <InnerNavbarWrapper>
      <NavbarLink
        to="/"
        isActive={new RegExp('^/$|^/about').test(props.pathname)}
        Icon={AboutIcon}
        label="About"
      />
      <NavbarLink
        to="/projects"
        isActive={new RegExp('^/projects').test(props.pathname)}
        Icon={ProjectsIcon}
        label="Projects"
      />
      <NavbarLink
        to="/contact"
        isActive={new RegExp('^/contact').test(props.pathname)}
        Icon={ContactIcon}
        label="Contact"
      />
    </InnerNavbarWrapper>
  </NavbarWrapper>
)

export default Navbar
