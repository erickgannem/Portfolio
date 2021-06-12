import styled from 'styled-components'

import guidelines from '../../guidelines'

const { sizes, colors } = guidelines

const Hero = styled.div`
  background-color: ${colors.paleGrey2};
  border-radius: ${sizes.rem['5px']}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  @media (max-width: 899px) {
    padding: 2rem;
    flex-wrap: wrap;
  }
`
export default Hero
