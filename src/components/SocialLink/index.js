import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import twitterIcon from './twitter.svg'
import instagramIcon from './instagram.png'
import linkedinIcon from './linkedin.svg'
import githubIcon from './github.svg'
import './styles.css'

export const TYPES = {
  twitter: 'TWITTER',
  linkedin: 'LINKEDIN',
  github: 'GITHUB',
  instagram: 'INSTAGRAM'
}

const SocialLinkProvider = props => {
  switch (props.type) {
    case TYPES.twitter:
      return <SocialLink icon={twitterIcon} color="blue" label="Twitter" />
    case TYPES.instagram:
      return <SocialLink icon={instagramIcon} color="blue" label="Instgram" />
    case TYPES.linkedin:
      return <SocialLink icon={linkedinIcon} color="blue" label="LinkedIn" />
    case TYPES.github:
      return <SocialLink icon={githubIcon} color="blue" label="GitHub" />
  }
}

SocialLinkProvider.propTypes = {
  type: PropTypes.oneOf(TYPES)
}

const SocialLink = props => (
  <Link
    className="social-icon-wrapper"
    style={{ backgroundColor: props.color }}
  >
    <img className="social-icon" alt={props.label} src={props.icon} />
  </Link>
)

export default SocialLinkProvider
