import styled from 'styled-components'

interface TextProps {
  fontSize?: string
  fontWeight?: string
  color?: string
  fontFamily?: string
  lineHeight?: string
}
const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 'none'};
  color: ${({ color }) => color || 'none'};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: ${({ lineHeight }) => lineHeight};
`

export default Text
