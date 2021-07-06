import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const Hero = styled.div`
  background-color: ${colors.paleGrey2};

  @media (min-width: 0) {
    padding: 25px;
    height: 100%;
  }



`
export default Hero
