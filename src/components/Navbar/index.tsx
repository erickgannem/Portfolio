import React from 'react'
import Photo from '../../assets/images/IMG_20180208_192306.jpg'

import { Nav, Left, Center, Right, Image, NavLinks } from './styled'

export default function Navbar () {
  return (
    <Nav>
      <Left>
        <Image src={Photo} />
      </Left>
      <Center>
        <NavLinks>

        </NavLinks>
      </Center>
      <Right>
        3
      </Right>
    </Nav>
  )
}
