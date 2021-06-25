import React from 'react'
import styled from 'styled-components'

import Image from 'components/Image'

import Placeholder from 'assets/images/comingsoon.png'

import guidelines from 'guidelines'

import { DiNodejsSmall, DiMongodb, DiRedis } from 'react-icons/di'

// Will be separated
const { colors } = guidelines

const _ImageGroup = styled.div`
  display: flex;
  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
  }
  
`
const _GroupItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
background-color: ${colors.darkBlueGreen90};
border-radius: 5px;
box-shadow: 1px -1px 10px ${colors.shadow60};

@media (max-width: 899px) {
  margin: 1.5rem 0 0 0;
}
`

const _Container = styled.div`
  @media (max-width: 449px) {
    padding: 1rem;
  }
`

const _Technologies = styled.div`
  @media (max-width: 449px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
const _Technology = styled.div`
  @media (max-width: 449px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
    padding-bottom: 1rem;
  }
`
const _TechnologyCaption = styled.p`
  color: ${colors.coolGrey};
`
const _ItemTitle = styled.h1`
  color: ${colors.coolGrey};
  font-weight: 400;
  font-family: 'Fira Sans';
  
  @media (max-width: 449px) {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
  }
`
// Will be separated

export default function Works () {
  return (
    <_Container>
      <_ImageGroup>
        <_GroupItem>
          <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0'/>
          <_ItemTitle>
            {'Clicksign Asaas Integration'}
          </_ItemTitle>
          <_Technologies>
            <_Technology>
              <DiNodejsSmall size='2.3rem' color={colors.coolGrey}/>
              <_TechnologyCaption>
                node.js
              </_TechnologyCaption>
            </_Technology>

            <_Technology>
              <DiRedis size='2.3rem' color={colors.coolGrey}/>
              <_TechnologyCaption>
                RedisDB
              </_TechnologyCaption>
            </_Technology>
          </_Technologies>
        </_GroupItem>
        <_GroupItem>
          <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
          <_ItemTitle>
            {'SPA React Flower Shop'}
          </_ItemTitle>
        </_GroupItem>
        <_GroupItem>
          <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
          <_ItemTitle>
            {'Automatic invoices integration'}
          </_ItemTitle>
          <_Technology>
              <DiMongodb size='2rem'/>
              <_TechnologyCaption>
                MongoDB
              </_TechnologyCaption>
            </_Technology>
        </_GroupItem>
      </_ImageGroup>
    </_Container>
  )
}
