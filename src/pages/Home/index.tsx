import React from 'react'
import { Link } from 'react-router-dom'
import { RiSendPlane2Fill } from 'react-icons/ri'

import Hero from 'pages/Home/Hero'
import TextInput from 'components/TextInput'
import HeroSVG from 'pages/Home/HeroSVG'

import RightSideBlock from 'pages/Home/RightSideBlock'
import HeroTextWrapper from 'pages/Home/HeroTextWrapper'
import HeroInputWrapper from 'pages/Home/HeroInputWrapper'

import guidelines from 'guidelines'
import styled from 'styled-components'

import NavbarMenuContext from 'context/NavbarMenuContext'

const { colors } = guidelines

const _Container = styled.div`
  @media (min-width: 0) {
    padding: 20px;
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
const _HeroTextHeader = styled.h1`
  font-weight: bold;
  font-family: 'Fira Sans';
  color: ${colors.coolGrey};

  @media (min-width: 0) {
    font-size: 4rem;
    line-height: 60px;
    margin-bottom: 10px;
  }
  @media (min-width: 900px) {
    margin-bottom: 15px;
  }

`
const _HeroSecondaryText = styled.p`
  @media (min-width: 0) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  @media (min-width: 900px) {
    text-align: center;
    font-size: 1.2rem;
  }
`

const _HeroThirdText = styled.p`
  @media (min-width: 0) {
    font-size: 1.4rem;
  }
  @media (min-width: 900px) {
    font-size: 1.1rem;
    text-align: center;

  }  
`

const _HeroButton = styled.button`
  background: ${colors.orangeish};
  border: none;
  padding: 1rem;
  border-radius: 0 5px 5px 0;
  color: #802D00;
  font-weight: bold;

  ${this}:hover {
    cursor: pointer;
  }
`
const _SendIcon = styled(RiSendPlane2Fill)`
`

export default function Home () {
  const { setIsOpen } = React.useContext(NavbarMenuContext)
  React.useEffect(() => {
    setIsOpen(false)
  }, [])
  return (
    <_Container>
      <Hero>
        <HeroSVG />
        <RightSideBlock>
          <HeroTextWrapper>
            <_HeroTextHeader>
              Olá, meu nome é Erick
            </_HeroTextHeader>
            <_HeroSecondaryText>
              Sou freelancer com mais de 5 anos de experiência
              <br />
              Profissional criando sites e integrando serviços web
              <br />
            </_HeroSecondaryText>
            <_HeroThirdText>
              Fique à vontade para entrar em contato comigo <Link to='/works' style={{ color: colors.darkBlueGreen, textDecoration: 'none', fontWeight: 'bold' }}> ou dar uma olhada no meu trabalho </Link>
            </_HeroThirdText>
          </HeroTextWrapper>
          <HeroInputWrapper>
            <TextInput
              grow='4'
              borderRadius='5px 0 0 5px'
              padding='1.4rem'
              placeholder='Email Address'
              color={colors.darkBlueGreen}
            />
            <_HeroButton>
              <_SendIcon size='20px' />
            </_HeroButton>
          </HeroInputWrapper>
        </RightSideBlock>
      </Hero>
    </_Container>
  )
}
