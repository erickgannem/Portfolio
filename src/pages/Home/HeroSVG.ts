import styled from 'styled-components'
import { ReactComponent as _HeroSVG } from 'assets/svg/left-side-hero.svg'

const HeroSVG = styled(_HeroSVG)`
  @media (min-width: 0) {
    display: none;
    height: auto;
  }
  @media (min-width:350px) {
    display: inline;
  }  
  @media (min-width: 0) {
    width: 100%;
  }
  @media (min-width: 900px) {
    width: 24rem;
  }
`

export default HeroSVG
