import React from 'react'
import NavbarIcon from '~/components/NavbarIcon'
import { IconType } from './types'

const Icon: IconType = ({ isFilled }) => (
  <NavbarIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    {isFilled ? (
      <>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          fill="currentcolor"
          d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
        />
      </>
    ) : (
      <>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          fill="currentcolor"
          d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
        />
      </>
    )}
  </NavbarIcon>
)

export default Icon
