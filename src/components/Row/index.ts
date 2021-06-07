import styled from 'styled-components'

interface RowProps {
  width?: string
  direction?: string
}
const Row = styled.div<RowProps>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: ${({ direction }) => direction};
`

export default Row
