import React from 'react'

import Container from '../../components/Container'
import Column from '../../components/Column'
import Row from '../../components/Row'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'
import Illustration from '../../components/Illustration'

import guidelines from '../../guidelines'
const { sizes, colors } = guidelines

export default function Home () {
  return (
    <Container>
      <Hero>
        <Illustration />
        <Column direction='column'>
          <Row direction='column' margin={`0 0 ${sizes.rem['50px']}rem 0`}>
            <Text
              fontSize={sizes.rem['70px'] + 'rem'}
              fontWeight='bold'
              color={colors.coolGrey}
              fontFamily='Fira Sans'
              margin={`0 0 ${sizes.rem['15px']}rem 0`}
            >
              Hello, my name is Erick
            </Text>
            <Text
              fontSize={sizes.rem['20px'] + 'rem'}
              color={colors.darkBlueGreen}
              fontFamily='Open Sans'
              lineHeight={sizes.rem['30px'] + 'rem'}
              textAlign='center'
            >
              I am a freelancer, +5 years experience web developer
              <br />
              Professional at building websites and integrating web services.
              <br />
            </Text>
          </Row>
          <Row width='100%'>
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
          </Row>
        </Column>
        </Hero>
    </Container>
  )
}
