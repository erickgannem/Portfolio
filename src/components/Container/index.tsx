import styled from 'styled-components'

interface ContainerProps<T = 'grid' | 'flex'> {
  display?: T
  padding?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  gridTemplateRows?: string
  gridTemplateColumns?: string
}
const Container = styled.div<ContainerProps>`
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns}
`

export default Container
