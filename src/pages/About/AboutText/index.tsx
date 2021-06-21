import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const AboutText = styled.p`
  text-align: justify;
  line-height: 23px;
  color: ${colors.darkBlueGreen};
  @media (max-width: 899px) {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`

export default AboutText
