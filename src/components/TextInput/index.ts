import styled from 'styled-components'
import guidelines from '../../guidelines'

const { sizes, colors } = guidelines

const TextInput = styled.input`
  background-color: ${colors.white};
  border: 1px solid ${colors.paleGrey2};
  padding: ${sizes.rem['15px']}rem;
  font-size: ${sizes.rem['15px']}rem;
`

export default TextInput
