import styled from 'styled-components'

const Container = styled.div<{padding?: string}>`
  padding: ${({ padding }) => padding}
`

export default Container
