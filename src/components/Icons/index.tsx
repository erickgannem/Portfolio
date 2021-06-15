import styled from 'styled-components'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import guidelines from '../../guidelines'

const { colors } = guidelines

export const InstagramIcon = styled(IoLogoInstagram)`
  @media (max-width: 899px) {
    color: ${colors.paleGrey2};
    margin: 0 2rem;
  }
`
export const GithubIcon = styled(IoLogoGithub)`
  @media (max-width: 899px) {
    color: ${colors.paleGrey2};
    margin: 0 2rem;

  }
`
export const LinkedinIcon = styled(IoLogoLinkedin)`
  @media (max-width: 899px) {
    color: ${colors.paleGrey2};
    margin: 0 2rem;
  }
`
