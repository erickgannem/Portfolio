import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Container from 'components/Container'
import Hero from 'components/Hero'
import Button from 'components/Button'
import Text from 'components/Text'
import TextInput from 'components/TextInput'
import Illustration from 'components/Illustration'

import guidelines from 'guidelines'

const { sizes, colors } = guidelines

const RightSideBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const HeroTextWrapper = styled.div`
  text-align: center;

  @media (max-width: 899px) {
    margin-bottom: 2rem;
  }
`
const HeroInputWrapper = styled.div`
  display: flex;
`

export default function Home () {
  return (
    <Container>
      <Hero>
        <Illustration />
        <RightSideBlock>
          <HeroTextWrapper>
            <Text
              fontSize={sizes.rem['70px'] + 'rem'}
              fontWeight='bold'
              color={colors.coolGrey}
              fontFamily='Fira Sans'
              margin={`0 0 ${sizes.rem['15px']}rem 0`}
            >
              Olá, meu nome é Erick
            </Text>
            <Text
              fontSize={sizes.rem['20px'] + 'rem'}
              color={colors.darkBlueGreen}
              fontFamily='Open Sans'
              lineHeight={sizes.rem['30px'] + 'rem'}
              textAlign='center'
            >
              Sou freelancer com mais de 5 anos de experiência
              <br />
              Profissional criando sites e integrando serviços web
              <br />
            </Text>
            <Text
              fontSize={sizes.rem['20px'] + 'rem'}
              color={colors.darkBlueGreen}
              fontFamily='Open Sans'
              lineHeight={sizes.rem['30px'] + 'rem'}
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
              padding={`${sizes.rem['20px']}rem`}
              placeholder='Email Address'
              color={colors.darkBlueGreen}
            />
            <Button grow='1' borderRadius='0 5px 5px 0'>
              Contact me
            </Button>
          </HeroInputWrapper>
        </RightSideBlock>
      </Hero>
    </Container>
  )
}
