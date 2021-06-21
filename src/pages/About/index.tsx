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
            Meu nome é Erick Gannem
          </MainText>
          <AboutText>
              Sou um programador venezuelano, autodidata que atualmente mora no Brasil desde 2018. Nasci numa familia bem relacionada com a área de TI por causa do meu pai, quem me ensinou tudo o que eu sei até hoje. Comecei programar por volta do ano 2016 focado no desenvolvimento web.

              Gosto de ouvir quase qualquer tipo de música dos anos 80 e 90. Também sou fã de tirar fotos do pôr do sol e natureza. Olha algumas delas:
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
