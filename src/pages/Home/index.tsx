import React from 'react'
import { Link } from 'react-router-dom'

import Hero from 'components/Hero'
import Button from 'components/Button'
import Text from 'components/Text'
import TextInput from 'components/TextInput'
import HeroSVG from 'pages/Home/HeroSVG'

import RightSideBlock from 'pages/Home/RightSideBlock'
import HeroTextWrapper from 'pages/Home/HeroTextWrapper'
import HeroInputWrapper from 'pages/Home/HeroInputWrapper'

import guidelines from 'guidelines'
import styled from 'styled-components'

const { colors } = guidelines

const _Container = styled.div`

@media (min-width: 899px) {
  padding: 2rem;
}
`

export default function Home () {
  return (
    <_Container>
      <Hero>
        <HeroSVG />
        <RightSideBlock>
          <HeroTextWrapper>
            <Text
              fontSize='4.3rem'
              fontWeight='bold'
              color={colors.coolGrey}
              fontFamily='Fira Sans'
              margin='0 0 1rem 0'
            >
              Olá, meu nome é Erick
            </Text>
            <Text
              fontSize='1.5rem'
              color={colors.darkBlueGreen}
              fontFamily='Open Sans'
              lineHeight='2rem'
              textAlign='center'
            >
              Sou freelancer com mais de 5 anos de experiência
              <br />
              Profissional criando sites e integrando serviços web
              <br />
            </Text>
            <Text
              fontSize='1.3rem'
              color={colors.darkBlueGreen}
              fontFamily='Open Sans'
              lineHeight='2rem'
              textAlign='center'
              margin='1rem 0 0 0'
            >
              Fique à vontade para me contatar <Link to='/works' style={{ color: colors.darkBlueGreen, textDecoration: 'none', fontWeight: 'bold' }}> ou dar uma olhada no meu trabalho </Link>
            </Text>
          </HeroTextWrapper>
          <HeroInputWrapper>
            <TextInput
              grow='4'
              borderRadius='5px 0 0 5px'
              padding='1.4rem'
              placeholder='Email Address'
              color={colors.darkBlueGreen}
            />
            <Button grow='1' borderRadius='0 5px 5px 0'>
              Contact me
            </Button>
          </HeroInputWrapper>
        </RightSideBlock>
      </Hero>
    </_Container>
  )
}
