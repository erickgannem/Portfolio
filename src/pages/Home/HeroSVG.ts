import styled from 'styled-components'
import { ReactComponent as _HeroSVG } from 'assets/svg/left-side-hero.svg'

const HeroSVG = styled(_HeroSVG)`
  @media (max-width:399px) {
    display: none;
  }
  @media (max-width: 899px) {
    width: 100%;
  }
  @media (min-width: 900px) {
    width: auto;
  }
`

export default HeroSVG
