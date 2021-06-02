import styled from 'styled-components'
import { Link } from 'react-router-dom'

import styling from '../../../styling'
const { colors, sizes } = styling

const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 ${sizes.rem['25px']}rem;
  color: ${colors.darkBlueGreen};
  font-size: ${sizes.rem['20px']}rem;
`
export default NavLink
