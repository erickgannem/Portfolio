import styled from 'styled-components'
import { Link } from 'react-router-dom'

import guidelines from 'guidelines'
const { colors } = guidelines

type NavLinkProps = {
  $isActive: boolean
}
const NavLink = styled(Link)`
  text-decoration: none;
  margin: '0 1.4rem';
  font-size: '1.6rem';
  background-color: ${({ $isActive }: NavLinkProps) => $isActive && colors.paleAqua};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: inherit;

  @media (max-width: 899px) {
    color: ${({ $isActive }) => $isActive ? colors.darkBlueGreen : colors.paleGrey1}
  }
`
export default NavLink
