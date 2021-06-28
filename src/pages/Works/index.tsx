import React from 'react'
import styled from 'styled-components'

import Image from 'components/Image'

import Placeholder from 'assets/images/comingsoon.png'

import guidelines from 'guidelines'

import { DiNodejsSmall, DiMongodb, DiRedis, DiReact, DiHtml5, DiCss3, DiJavascript } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

// Will be separated
const { colors } = guidelines

const _Container = styled.div`
  @media (max-width: 889px) {
    padding: 1rem;
  }
`

const _ItemTechnologies = styled.div`
  @media (max-width: 889px) {
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`
const _ItemTechnology = styled.div`
  @media (max-width: 889px) {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
  }
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
  justify-content: space-between;
}

@media (min-width: 650px) {
  flex: 1 1 calc(90vw/3);
  max-width: calc(90vw/3);
}
@media (min-width: 700px) {
  flex: 1 1 calc(90vw/3);
  max-width: calc(91vw/3);
}
@media (min-width: 750px) {
  flex: 1 1 calc(90vw/3);
  max-width: calc(92vw/3);
}
@media (min-width: 860px) {
  flex: 1 1 calc(90vw/3);
  max-width: calc(93vw/3);
}
`

const _ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
`
const _ItemTechnologyCaption = styled.p`
  color: ${colors.coolGrey};
`
const _ItemHeaderSection = styled.div`
  @media (max-width: 889px) {
  }
`
const _ItemHeaderTextWrapper = styled.div`
  padding: 0.5rem;
`

// Will be separated

export default function Works () {
  return (
    <_Container>
      <_ItemsWrapper>
        <_Item>
          <_ItemHeaderSection>
            <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0'/>
            <_ItemHeaderTextWrapper>
              <_ItemTitle>
                {'Fluxo Clicksign - Asaas'}
              </_ItemTitle>
              <_ItemDescription>
                Integração entre a plataforma
                de assinaturas digitais Clicksign
                e a plataforma de pagamentos eletrônicos Asaas
              </_ItemDescription>
            </_ItemHeaderTextWrapper>
          </_ItemHeaderSection>
          <_ItemTechnologies>
            <_ItemTechnology>
              <DiNodejsSmall size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                node.js
              </_ItemTechnologyCaption>
            </_ItemTechnology>
            <_ItemTechnology>
              <DiRedis color={colors.coolGrey} size='2rem' />
              <_ItemTechnologyCaption>
                RedisDB
              </_ItemTechnologyCaption>
            </_ItemTechnology>
            <_ItemTechnology>
              <SiTypescript size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                TypeScript
              </_ItemTechnologyCaption>
            </_ItemTechnology>
          </_ItemTechnologies>
        </_Item>

        <_Item>
          <_ItemHeaderSection>
            <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
            <_ItemHeaderTextWrapper>
              <_ItemTitle>
                {'React Flower Shop'}
              </_ItemTitle>
              <_ItemDescription>
                Catálogo para loja de flores com sistema de login
                para o administrador, com paginação.
                Simples e leve para ser acessado por conexões
                lentas
              </_ItemDescription>
            </_ItemHeaderTextWrapper>
          </_ItemHeaderSection>
          <_ItemTechnologies>
            <_ItemTechnology>
              <DiReact size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                ReactJS
              </_ItemTechnologyCaption>
            </_ItemTechnology>
          </_ItemTechnologies>
        </_Item>

        <_Item>
          <_ItemHeaderSection>
            <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
            <_ItemHeaderTextWrapper>
              <_ItemTitle>
                {'Notas Fiscais Automáticas'}
              </_ItemTitle>
              <_ItemDescription>
                Detecção de pagamentos aprovados e posterior geração
                de nota fiscal através da API Asaas. Controle de
                transações processadas para evitar duplicados
              </_ItemDescription>
            </_ItemHeaderTextWrapper>
          </_ItemHeaderSection>
          <_ItemTechnologies>
            <_ItemTechnology>
              <DiNodejsSmall size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                node.js
              </_ItemTechnologyCaption>
            </_ItemTechnology>
            <_ItemTechnology>
              <DiMongodb color={colors.coolGrey} size='2rem'/>
              <_ItemTechnologyCaption>
                MongoDB
              </_ItemTechnologyCaption>
            </_ItemTechnology>
            <_ItemTechnology>
              <SiTypescript size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                TypeScript
              </_ItemTechnologyCaption>
            </_ItemTechnology>
          </_ItemTechnologies>
        </_Item>

        <_Item>
          <_ItemHeaderSection>
            <Image src={Placeholder} width='100%' borderRadius='5px 5px 0 0' />
            <_ItemHeaderTextWrapper>
              <_ItemTitle>
                {'Wire Gauge Calculator'}
              </_ItemTitle>
              <_ItemDescription>
                Ferramenta que permite o cálculo da bitola
                do condutor para uma rede de distribuição
                segundo o tipo de sistema e a quantidade
                de cargas conectadas nele
              </_ItemDescription>
            </_ItemHeaderTextWrapper>
          </_ItemHeaderSection>
          <_ItemTechnologies>
            <_ItemTechnology>
              <DiHtml5 size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                HTML5
              </_ItemTechnologyCaption>
            </_ItemTechnology>
            <_ItemTechnology>
              <DiCss3 color={colors.coolGrey} size='2rem'/>
              <_ItemTechnologyCaption>
                CSS3
              </_ItemTechnologyCaption>
            </_ItemTechnology>
            <_ItemTechnology>
              <DiJavascript size='2rem' color={colors.coolGrey}/>
              <_ItemTechnologyCaption>
                JavaScript
              </_ItemTechnologyCaption>
            </_ItemTechnology>
          </_ItemTechnologies>
        </_Item>
      </_ItemsWrapper>
    </_Container>
  )
}
