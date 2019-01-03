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
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"
        />
        <path fill="none" d="M0 0h24v24H0V0z" />
      </>
    ) : (
      <>
        <path
          d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"
          fill="currentcolor"
        />
      </>
    )}
  </NavbarIcon>
)

export default Icon
