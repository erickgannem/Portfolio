import styled from 'styled-components'

type ColumnProps = {
  direction?: string
  justify?: string
}
const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || ''}; 
  justify-content: ${({ justify }) => justify || ''}
`

export default Column
