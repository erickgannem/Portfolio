import styled from 'styled-components'
import guidelines from 'guidelines'

const { colors } = guidelines

interface TextInputProps {
  grow?: string
  borderRadius?: string
  padding?: string
  color?: string
}

const TextInput = styled.input<TextInputProps>`
  border-radius: ${({ borderRadius }) => borderRadius};
  flex-grow: ${({ grow }) => grow};
  background-color: ${colors.white};
  border: none;
  padding: ${({ padding }) => padding};
  font-size: 1rem;
  color: ${({ color }) => color};

  ${this}:focus {
    outline: none;
  }

  ::placeholder {
    color: ${colors.coolGrey};
  }
`

export default TextInput
