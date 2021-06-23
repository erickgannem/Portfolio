import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

interface ButtonProps {
  grow?: string
  borderRadius?: string
  color?: string
  backgroundColor?: string
  fontSize?: string
  width?: string
  margin?: string
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  flex-grow: ${({ grow }) => grow};
  background-color: ${({ backgroundColor }) => backgroundColor || colors.greenBlue};
  color: ${({ color }) => color || colors.white};
  font-weight: bold;
  padding: 1rem;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  border: none;
  ${this}:hover {
    cursor: pointer
  }
`

export default Button
