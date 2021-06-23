import styled from 'styled-components'
import { ReactComponent as _HeroSVG } from 'assets/svg/left-side-hero.svg'

const HeroSVG = styled(_HeroSVG)`
  width: 100%;
  @media (max-width:399px) {
    display: none;
  }
`

export default HeroSVG
