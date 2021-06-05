import React from 'react'
import { useLocation } from 'react-router-dom'
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

import guidelines from '../../guidelines'
import Photo from '../../assets/images/IMG_20180208_192306.jpg'

export default function Navbar () {
  const { pathname: path } = useLocation()
  const { sizes, colors } = guidelines
  return (
    <Nav>
      <Left>
        <Image src={Photo} />
      </Left>
      <Center>
        <NavLinks>
          <NavLink
            to='/'
            isactive={path === '/'}
          >Home</NavLink>

          <NavLink
            to='/about'
            isactive={path === '/about'}
          >About</NavLink>

          <NavLink
            to='/works'
            isactive={path === '/works'}
          >Works</NavLink>

          <NavLink
            to='/services'
            isactive={path === '/services'}
          >Services</NavLink>

          <NavLink
            to='/contact'
            isactive={path === '/contact'}
          >Contact</NavLink>
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
          <SocialIconContainer
            margin={`${sizes.rem['30px']}rem`}
          >
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
