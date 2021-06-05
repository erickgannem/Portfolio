import React from 'react'

import Container from '../../components/Container'
import Hero from '../../components/Hero'
import Column from '../../components/Column'
import Text from '../../components/Text'
import IconContainer from '../../components/IconContainer'

import { ReactComponent as Sketch } from '../../assets/svg/sketch.svg'
import { ReactComponent as Blocks } from '../../assets/svg/blocks.svg'
import { ReactComponent as Diagram } from '../../assets/svg/diagram.svg'
import { ReactComponent as Mobile } from '../../assets/svg/mobile.svg'

import styling from '../../guidelines'

export default function Home () {
  const { sizes, colors } = styling
  return (
    <Container>
      <Hero>
        <Column direction="column">
          <IconContainer Icon={Sketch} color={colors.aquaGreen}/>
          <IconContainer Icon={Blocks} color={colors.darkBlueGreen}/>
          <IconContainer Icon={Diagram} color={colors.pinkishRed}/>
          <IconContainer Icon={Mobile} color={colors.coolGrey}/>
        </Column>
        <Column direction="column">
          <Text
            fontSize={sizes.rem['50px'] + 'rem'}
            fontWeight='bold'
            color={colors.coolGrey}
            fontFamily='Open Sans'
          >Hello, my name is Erick</Text>
          <Text
            fontSize={sizes.rem['20px'] + 'rem'}
            color={colors.darkBlueGreen}
            fontFamily='Open Sans'
            lineHeight={sizes.rem['30px'] + 'rem'}
          >I am a freelancer, +5 years experience web developer <br /> Profissional at building websites integrating web services.</Text>

        </Column>
      </Hero>
    </Container>
  )
}
