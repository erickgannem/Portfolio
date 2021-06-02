import React from 'react'

import Nav from './styled/Nav'
import Left from './styled/Left'
import Right from './styled/Right'
import Center from './styled/Center'
import NavLinks from './styled/NavLinks'
import NavLink from './styled/NavLink'
import Image from './styled/Image'

import Photo from '../../assets/images/IMG_20180208_192306.jpg'

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
