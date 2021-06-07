import styled from 'styled-components'

interface RowProps {
  width?: string
  direction?: string
  margin?: string
}
const Row = styled.div<RowProps>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin: ${({ margin }) => margin};
`

export default Row
