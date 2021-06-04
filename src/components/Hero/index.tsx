import styled from 'styled-components'

import styling from '../../styling'

const { sizes, colors } = styling

const Hero = styled.div`
  background-color: ${colors.paleyGrey2};
  padding: ${sizes.rem['30px']}rem;
  border-radius: ${sizes.rem['5px']}rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
`
export default Hero
