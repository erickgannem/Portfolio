import styled from 'styled-components'

import styling from '../../styling'

const { colors, sizes } = styling

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${colors.paleyGrey2};
  box-shadow: 1px 1px 1px ${colors.shadow10};
  padding: ${sizes.rem['15px']}rem;
`

export { Nav }
