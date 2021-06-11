import React from 'react'
import { useLocation } from 'react-router-dom'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Nav from './Nav'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import NavLinks from './NavLinks'
import NavLink from './NavLink'
import Image from './Image'
import SocialIcons from './SocialIcons'
import SocialIconContainer from '../SocialIcon'

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
            $isactive={path === '/'}
          >Home</NavLink>

          <NavLink
            to='/about'
            $isactive={path === '/about'}
          >About</NavLink>

          <NavLink
            to='/works'
            $isactive={path === '/works'}
          >Works</NavLink>

          <NavLink
            to='/services'
            $isactive={path === '/services'}
          >Services</NavLink>

          <NavLink
            to='/contact'
            $isactive={path === '/contact'}
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
