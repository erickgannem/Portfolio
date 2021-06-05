import styled from 'styled-components'
import { Link } from 'react-router-dom'

import styling from '../../../guidelines'
const { colors, sizes } = styling

type NavLinkProps = {
  isactive: boolean
}
const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 ${sizes.rem['20px']}rem;
  color: ${colors.darkBlueGreen};
  font-size: ${sizes.rem['20px']}rem;
  background-color: ${
    ({ isactive }: NavLinkProps) => isactive ? colors.paleAqua : 'none'
  };
  padding: ${sizes.rem['10px']}rem ${sizes.rem['15px']}rem;
  border-radius: ${sizes.rem['5px']}rem
`
export default NavLink
