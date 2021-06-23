import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const Hero = styled.div`
  background-color: ${colors.paleGrey2};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 899px) {
    padding: 2rem;
    flex-wrap: wrap;
  }
  @media (min-width: 900px) {
    padding: 2rem;
  }
`
export default Hero
