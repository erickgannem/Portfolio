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

export default function About () {
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
              I am Venezuelan self-taught programmer living in Brazil since 2018. I was raised in a IT-related family, mainly because of my father, who taught me all that I know today. I started programming when I was 20 years old with a high focus on web development.
              I like to listen rock, country and almost any kind of music. Love to take pictures of sunsets and nature, here you can see some of them:
          </AboutText>
        </TextGroup>
      </>
      <ImageGroup>
        <GroupItem>
          <Image src={PictureOne} width='100%' borderRadius='10px'/>
        </GroupItem>
        <GroupItem>
          <Image src={PictureTwo} width='100%' borderRadius='10px'/>
        </GroupItem>
        <GroupItem>
          <Image src={PictureThree} width='100%' borderRadius='10px'/>
        </GroupItem>
      </ImageGroup>
    </Container>
  )
}
