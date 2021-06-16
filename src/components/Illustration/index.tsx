import styled from 'styled-components'
import { ReactComponent as _Illustration } from 'assets/svg/left-side-hero.svg'

const Illustration = styled(_Illustration)`
  width: 100%;
  @media (max-width:399px) {
    display: none;
  }
`

export default Illustration
