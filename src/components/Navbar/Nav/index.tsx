import styled from 'styled-components'
import guidelines from '../../../guidelines'

const { colors, sizes } = guidelines

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.paleGrey2};
  box-shadow: 1px 1px 1px ${colors.shadow10};
  padding: ${sizes.rem['15px']}rem ${sizes.rem['30px']}rem;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 0fr 1fr 0fr;
    place-items: center;

  }
`
export default Nav
