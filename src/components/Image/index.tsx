import styled from 'styled-components'

interface ImageProps {
  width: string
  rounded?: boolean
  margin?: string
}

const Image = styled.img<ImageProps>`
  width: ${({ width }) => width};
  border-radius: ${({ rounded }) => rounded && '100%'};
  margin: ${({ margin }) => margin};
`

export default Image
