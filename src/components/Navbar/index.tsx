import React from 'react'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Nav from './styled/Nav'
import Left from './styled/Left'
import Right from './styled/Right'
import Center from './styled/Center'
import NavLinks from './styled/NavLinks'
import NavLink from './styled/NavLink'
import Image from './styled/Image'
import SocialIcons from './styled/SocialIcons'
import SocialIconContainer from './styled/SocialIconContainer'

import styling from '../../styling'
import Photo from '../../assets/images/IMG_20180208_192306.jpg'

export default function Navbar () {
  const { sizes, colors } = styling
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
        <SocialIcons>
          <SocialIconContainer>
            <IoLogoInstagram
              size={`${sizes.rem['25px']}rem`}
              color={colors.coolGrey}
            />
          </SocialIconContainer>
          <SocialIconContainer margin={`${sizes.rem['20px']}rem`}>
            <IoLogoGithub
              size={`${sizes.rem['25px']}rem`}
              color={colors.coolGrey}
            />
          </SocialIconContainer>
          <SocialIconContainer>
            <IoLogoLinkedin
              size={`${sizes.rem['25px']}rem`}
              color={colors.coolGrey}
            />
          </SocialIconContainer>
        </SocialIcons>
      </Right>
    </Nav>
  )
}
