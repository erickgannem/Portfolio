import React from 'react'

import Container from 'components/Container'
import Image from 'components/Image'
import Photo from 'assets/images/IMG_20180208_192306.jpg'
import Text from 'components/Text'

export default function About () {
  return (
    <Container padding='1rem'>
      <Image width='15rem' src={Photo} rounded />
      <Text>
        My name is Erick Gannem
      </Text>
      <Text>
        I am Venezuelan self-taught programmer living in Brazil since 2018. I started programming when I was 17 years old with a high focus on web development, I started reading a couple of books about basics HTML, CSS and Javascript.
      </Text>
    </Container>
  )
}
