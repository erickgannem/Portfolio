import styled from 'styled-components'
import styling from '../../../guidelines'

const { colors, sizes } = styling

const Nav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  place-items: center;
  background-color: ${colors.paleyGrey2};
  box-shadow: 1px 1px 1px ${colors.shadow10};
  padding: ${sizes.rem['15px']}rem ${sizes.rem['30px']}rem;
`
export default Nav
