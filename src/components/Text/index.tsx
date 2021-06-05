import styled from 'styled-components'

interface TextProps {
  fontSize?: string
  fontWeight?: string
  color?: string
}
const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 'none'};
  color: ${({ color }) => color || 'none'};
`

export default Text
