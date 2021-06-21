import React, { useState, MouseEvent, MouseEventHandler } from 'react'
import { useLocation } from 'react-router-dom'

import Nav from 'components/Navbar/Nav'
import NavLinks from 'components/Navbar/NavLinks'
import NavLink from 'components/Navbar/NavLink'
import Image from 'components/Image'
import SocialIconsContainer from 'components/Navbar/SocialIconsContainer'
import MenuButton from 'components/Navbar/MenuButton'
import MenuContent from 'components/Navbar/MenuContent'
import Indicator from 'components/Navbar/Indicator'
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'components/Icons'

import Photo from 'assets/images/IMG_20180208_192306.jpg'

import pathNameFormatter from 'utils/pathNameFormatter'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname: path } = useLocation()

  const formattedPath = pathNameFormatter(path) as string

  const _clickHandler: MouseEventHandler<HTMLElement> = (event: MouseEvent) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <Nav>
      <>
        {
          formattedPath
            ? <Indicator path={formattedPath}/>
            : <Image width='3.3rem' borderRadius='100%' src={Photo} margin='1rem' />
        }

      </>
      <MenuButton clickHandler={_clickHandler}/>
      <MenuContent isOpen={isOpen}>
        <NavLinks>
          <NavLink
            to='/'
            $isActive={path === '/'}
          >Início</NavLink>
          <NavLink
            to='/about'
            $isActive={path === '/about'}
          >Sobre Mim</NavLink>
          <NavLink
            to='/works'
            $isActive={path === '/works'}
          >Projetos</NavLink>
          <NavLink
            to='/services'
            $isActive={path === '/services'}
          >Habilidades</NavLink>
          <NavLink
            to='/contact'
            $isActive={path === '/contact'}
          >Contato</NavLink>
        </NavLinks>
        <SocialIconsContainer>
          <LinkedinIcon size='2rem' />
          <GithubIcon size='2rem' />
          <InstagramIcon size='2rem' />
        </SocialIconsContainer>
      </MenuContent>
    </Nav>
  )
}
