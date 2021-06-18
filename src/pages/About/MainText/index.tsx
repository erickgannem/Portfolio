import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const MainText = styled.h1`
  color: ${colors.darkBlueGreen};
  font-family: 'Fira Sans';
  @media (max-width: 899px) {
    font-size: 2.5rem;
    text-align: center;
  }
`

export default MainText
