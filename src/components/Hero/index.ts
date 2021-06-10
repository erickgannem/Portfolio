import styled from 'styled-components'

import guidelines from '../../guidelines'

const { sizes, colors } = guidelines

const Hero = styled.div`
  background-color: ${colors.paleGrey2};
  border-radius: ${sizes.rem['5px']}rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export default Hero
