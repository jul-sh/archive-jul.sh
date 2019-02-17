import React from 'react'
import styled from 'styled-components'
import NavbarLink from '~/components/NavbarLink'
import AboutIcon from '~/components/Icons/AboutIcon'
import ProjectsIcon from '~/components/Icons/ProjectsIcon'
import ContactIcon from '~/components/Icons/ContactIcon'
import { IconProps } from '~/components/Icons/types'

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-left: env(safe-area-inset-left);

  @media (max-width: 1100px) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 2px 0 2px black;
    background-color: hsl(221, 25%, 13%);
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);

    @supports (padding: max(0px)) {
      padding-left: max(var(--responsive-padding), env(safe-area-inset-left));
      padding-right: max(var(--responsive-padding), env(safe-area-inset-right));
    }

    @supports (
      (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
    ) {
      background-color: hsla(221, 20%, 15%, 0.925);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
    }
  }

  @media (max-width: 700px) {
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
  }

  @media print {
    display: none !important;
  }
`

const InnerNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40rem;
  max-height: 15rem;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  font-family: var(--sansFont);

  @media (max-width: 1100px) {
    flex-direction: row;
  }
`

const Navbar: React.FunctionComponent<{
  pathname: string
}> = ({ pathname }) => (
  <NavbarWrapper>
    <InnerNavbarWrapper>
      <NavbarLink
        to="/"
        isActive={new RegExp('^/$|^/about').test(pathname)}
        Icon={(props: IconProps) => <AboutIcon {...props} />}
        label="About"
      />
      <NavbarLink
        to="/projects"
        isActive={new RegExp('^/projects').test(pathname)}
        Icon={(props: IconProps) => <ProjectsIcon {...props} />}
        label="Projects"
      />
      <NavbarLink
        to="/contact"
        isActive={new RegExp('^/contact').test(pathname)}
        Icon={(props: IconProps) => <ContactIcon {...props} />}
        label="Contact"
      />
    </InnerNavbarWrapper>
  </NavbarWrapper>
)

export default Navbar
