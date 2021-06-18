import styled from 'styled-components'

interface ImageProps {
  width: string
  borderRadius?: string
  margin?: string
}

const Image = styled.img<ImageProps>`
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`

export default Image
