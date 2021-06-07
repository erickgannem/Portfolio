import styled from 'styled-components'

import guidelines from '../../guidelines'

const { sizes, colors } = guidelines

interface ButtonProps {
  grow?: string
  borderRadius?: string
}

const Button = styled.button<ButtonProps>`
  border-radius: ${({ borderRadius }) => borderRadius};
  flex-grow: ${({ grow }) => grow};
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
