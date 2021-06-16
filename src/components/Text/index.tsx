import styled from 'styled-components'

interface TextProps {
  fontSize?: string
  fontWeight?: string
  color?: string
  fontFamily?: string
  lineHeight?: string
  textAlign?: string
  margin?: string
}
const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin}

`

export default Text
