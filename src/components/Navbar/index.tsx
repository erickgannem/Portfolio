import React from 'react'

import Photo from '../../assets/images/IMG_20180208_192306.jpg'

import { Nav, Left, Center, Right, Image, NavLinks, NavLink } from './styled'

export default function Navbar () {
  return (
    <Nav>
      <Left>
        <Image src={Photo} />
      </Left>
      <Center>
        <NavLinks>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/works'>
            Works
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </NavLinks>
      </Center>
      <Right>
        3
      </Right>
    </Nav>
  )
}
