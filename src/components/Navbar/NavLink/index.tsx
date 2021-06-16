import styled from 'styled-components'
import { Link } from 'react-router-dom'

import guidelines from 'guidelines'
const { colors, sizes } = guidelines

type NavLinkProps = {
  $isActive: boolean
}
const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 ${sizes.rem['20px']}rem;
  font-size: ${sizes.rem['20px']}rem;
  background-color: ${({ $isActive }: NavLinkProps) => $isActive && colors.paleAqua};
  padding: ${sizes.rem['10px']}rem ${sizes.rem['15px']}rem;
  border-radius: ${sizes.rem['5px']}rem;

  @media (max-width: 899px) {
    color: ${({ $isActive }) => $isActive ? colors.darkBlueGreen : colors.paleGrey1}
  }
`
export default NavLink
