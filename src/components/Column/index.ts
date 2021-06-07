import styled from 'styled-components'

type ColumnProps = {
  direction?: string
  justifyContent?: string
  alignItems?: string
  padding?: string
}
const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction}; 
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  padding: ${({ padding }) => padding && padding}

`

export default Column
