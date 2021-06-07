import styled from 'styled-components'

import guidelines from '../../guidelines'

const { sizes, colors } = guidelines

const Button = styled.button`
  background-color: ${colors.greenBlue};
  color: ${colors.white};
  font-weight: bold;
  padding: ${sizes.rem['15px']}rem;
  font-size: ${sizes.rem['15px']}rem;
  border: none;
  ${this}:hover {
    cursor: pointer
  }
`

export default Button
