import styled from 'styled-components'
import { Link } from 'react-router-dom'

import styling from '../../styling'

const { colors, sizes } = styling

const Nav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  place-items: center;
  background-color: ${colors.paleyGrey2};
  box-shadow: 1px 1px 1px ${colors.shadow10};
  padding: ${sizes.rem['15px']}rem;
`

const Left = styled.div``
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`

const Center = styled.div``
const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
`
const NavLink = styled(Link)`
  text-decoration: none;
`

const Right = styled.div``

export { Nav, Left, Center, Right, Image, NavLinks, NavLink }
