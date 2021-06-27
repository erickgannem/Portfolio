import React from 'react'
import styled from 'styled-components'

import Image from 'components/Image'

import Placeholder from 'assets/images/comingsoon.png'

import guidelines from 'guidelines'

import { DiNodejsSmall, DiMongodb, DiRedis, DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

// Will be separated
const { colors } = guidelines

const _ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`
const _Item = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
background-color: ${colors.darkBlueGreen90};
border-radius: 5px;
box-shadow: 1px -1px 10px ${colors.shadow60};

@media (max-width: 649px) {
  max-width: 75%;
  min-width: 75%;
  margin: 1.5rem 0 0 0;
}
@media (min-width: 650px) {
  flex: 1 1 0;
  margin: 0.5rem;
}
`

const _Container = styled.div`
  @media (max-width: 889px) {
    padding: 1rem;
  }
`

const _Technologies = styled.div`
  @media (max-width: 889px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
const _Technology = styled.div`
  @media (max-width: 889px) {
    display: flex;
    flex: 1 1 0;
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
  line-break: loose;
  
  @media (max-width: 889px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

const _ItemDescription = styled.p`
  color: ${colors.coolGrey};
  margin: 1rem 0;
  text-align: center;
`

const _LowerItemSection = styled.div`
  @media (max-width: 889px) {
    padding: 1.2rem;
  }
`
// Will be separated

export default function Works () {
  return (
    <_Container>
      <_ItemsWrapper>
        <_Item>
          <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0'/>
          <_LowerItemSection>
            <_ItemTitle>
              {'Fluxo Clicksign - Asaas'}
            </_ItemTitle>
            <_ItemDescription>
              Integração entre a plataforma
              de assinaturas digitais Clicksign
              e a plataforma de pagamentos eletrônicos Asaas
            </_ItemDescription>
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
              <_Technology>
                <SiTypescript size='2.3rem' color={colors.coolGrey}/>
                <_TechnologyCaption>
                  TypeScript
                </_TechnologyCaption>
              </_Technology>
            </_Technologies>
          </_LowerItemSection>
        </_Item>
        <_Item>
          <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
          <_LowerItemSection>
            <_ItemTitle>
              {'React Flower Shop'}
            </_ItemTitle>
            <_ItemDescription>
              Catálogo para loja de flores com sistema de login
              para o administrador, com paginação.
              Simples e leve para ser acessado por conexões
              lentas
            </_ItemDescription>
            <_Technologies>
              <_Technology>
                <DiReact size='2rem' color={colors.coolGrey}/>
                <_TechnologyCaption>
                  ReactJS
                </_TechnologyCaption>
              </_Technology>
            </_Technologies>
          </_LowerItemSection>
        </_Item>
        <_Item>
          <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
          <_LowerItemSection>
          <_ItemTitle>
            {'Notas Fiscais Automáticas'}
          </_ItemTitle>
          <_ItemDescription>
            Detecção de pagamentos aprovados e posterior geração
            de nota fiscal através da API Asaas. Controle de
            transações processadas para evitar duplicados
          </_ItemDescription>
          <_Technologies>
            <_Technology>
              <DiNodejsSmall size='2.3rem' color={colors.coolGrey}/>
              <_TechnologyCaption>
                node.js
              </_TechnologyCaption>
            </_Technology>
            <_Technology>
              <DiMongodb size='2rem' color={colors.coolGrey}/>
              <_TechnologyCaption>
                MongoDB
              </_TechnologyCaption>
            </_Technology>
            <_Technology>
              <SiTypescript size='2.3rem' color={colors.coolGrey}/>
              <_TechnologyCaption>
                TypeScript
              </_TechnologyCaption>
            </_Technology>
          </_Technologies>
          </_LowerItemSection>
        </_Item>
      </_ItemsWrapper>
    </_Container>
  )
}
