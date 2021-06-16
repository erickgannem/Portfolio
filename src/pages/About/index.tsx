import React from 'react'

import Container from 'components/Container'
import Image from 'components/Image'
import Photo from 'assets/images/IMG_20180208_192306.jpg'
import Text from 'components/Text'

import guidelines from 'guidelines'

export default function About () {
  const { colors } = guidelines
  return (
    <Container
      padding='1rem'
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <Image width='15rem' src={Photo} rounded margin='auto' />
      <Text fontSize='2rem' fontWeight='bold' color={colors.darkBlueGreen} textAlign='left'>
        My name is Erick Gannem
      </Text>
      <Text fontSize='1.2rem' textAlign='center'>
        I am Venezuelan self-taught programmer living in Brazil since 2018. I was raised in a IT-related family, mainly because of my father, who taught me all that I know today. I started using GNU/Linux when I was 8 years old, my father introduced me with Ubuntu 7.04 and until today I am a Linux user (now Archlinux). I started programming when I was 17 years old with a high focus on web development, I started reading a couple of books about basics HTML, CSS and Javascript, then learned Node.js, React as well as other frameworks. Currently learning Elixir.
      </Text>
    </Container>
  )
}
