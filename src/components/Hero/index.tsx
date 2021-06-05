import styled from 'styled-components'

import guidelines from '../../guidelines'

const { sizes, colors } = guidelines

const Hero = styled.div`
  background-color: ${colors.paleyGrey2};
  padding: ${sizes.rem['30px']}rem;
  border-radius: ${sizes.rem['5px']}rem;
  display: grid;
  grid-template-columns: 0fr 2fr;
`
export default Hero
