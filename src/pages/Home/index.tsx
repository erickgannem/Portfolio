import React from 'react'

import Container from '../../components/Container'
import Hero from '../../components/Hero'
import Column from '../../components/Column'
import Text from '../../components/Text'

import styling from '../../guidelines'

export default function Home () {
  const { sizes, colors } = styling
  return (
    <Container>
      <Hero>
        <Column>s</Column>
        <Column direction="column">
          <Text
            fontSize={sizes.rem['50px'] + 'rem'}
            fontWeight='bold'
            color={colors.darkBlueGreen}
          >Hello, my name is Erick</Text>
          <Text>I am a web developer</Text>
        </Column>
      </Hero>
    </Container>
  )
}
