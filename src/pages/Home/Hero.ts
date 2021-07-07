import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const Hero = styled.div`
  background-color: ${colors.paleGrey2};

  @media (min-width: 0) {
    padding: 25px;
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }
  @media (min-width: 1000px) {
    padding: 30px 50px;
    width: 100%;
  }


`
export default Hero
