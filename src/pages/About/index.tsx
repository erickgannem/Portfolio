import React from 'react'

import Container from 'components/Container'
import Image from 'components/Image'
import Photo from 'assets/images/IMG_20180208_192306.jpg'
import PictureOne from 'assets/images/IMG_20170603_184857395.jpg'
import PictureTwo from 'assets/images/SAM_1788.jpg'
import PictureThree from 'assets/images/IMG_20190312_180549975.jpg'
import AboutText from 'pages/About/AboutText'
import GroupItem from 'pages/About/GroupItem'
import ImageGroup from 'pages/About/ImageGroup'
import MainText from 'pages/About/MainText'
import TextGroup from 'pages/About/TextGroup'

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
      <>
        <Image width='15rem' src={Photo} borderRadius='100%' margin='auto' />
        <TextGroup>
          <MainText>
              My name is Erick Gannem
          </MainText>
          <AboutText>
              I am Venezuelan self-taught programmer living in Brazil since 2018. I was raised in a IT-related family, mainly because of my father, who taught me all that I know today.I started using GNU/Linux when I was 8 years old, my father introduced me with Ubuntu 7.04 and until today I am a Linux user (now Archlinux). I started programming when I was 17 years old with a high focus on web development, I started reading a couple of books about basics HTML, CSS and Javascript, then learned Node.js, React as well as other frameworks. Currently learning Elixir.
          </AboutText>
        </TextGroup>
      </>
      <ImageGroup>
        <GroupItem>
          <Image src={PictureOne} width='100%' borderRadius='10px 10px 0 0'/>
          <Text padding='1rem' color={colors.paleGrey2}>
            {'I\'m really photography fan. Love to see the sunset'}
          </Text>
        </GroupItem>
        <GroupItem>
          <Image src={PictureTwo} width='100%' borderRadius='10px 10px 0 0'/>
          <Text padding='1rem' color={colors.paleGrey2}>
            {'I also love travelling and taking pictures of the places I visit'}
          </Text>
        </GroupItem>
        <GroupItem>
          <Image src={PictureThree} width='100%' borderRadius='10px 10px 0 0'/>
          <Text padding='1rem' color={colors.paleGrey2}>
            {'Nothing very professional but you got the point =)'}
          </Text>
        </GroupItem>
      </ImageGroup>
    </Container>
  )
}
