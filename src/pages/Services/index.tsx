import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'

import { ReactComponent as _RobotSVG } from 'assets/svg/auto.svg'
import { ReactComponent as _LayoutSVG } from 'assets/svg/desktop-ui.svg'
import { ReactComponent as _GearsSVG } from 'assets/svg/integration.svg'

import guidelines from 'guidelines'

const { colors } = guidelines

// will be separated
const ServiceGroup = styled.div`
  display: flex;

  @media (max-width: 899px) {
    flex-direction: column;
  }
`
const Title = styled.h1`
  font-weight: bolder;
  color: ${colors.darkBlueGreen};
  @media (max-width: 899px) {
    text-align: center;
    margin: 1rem 0 0.5rem 0;
  }
`
const Description = styled.p`
  color: ${colors.darkBlueGreen};
  @media (max-width: 899px) {
    text-align: center;
  } 
`
const TextWrapper = styled.div`
  @media (max-width: 899px) {
    margin: 1rem 0;
  }
`

const RobotSVG = styled(_RobotSVG)`
  @media (max-width: 899px) {
    margin: 0 auto;
  }
`
const LayoutSVG = styled(_LayoutSVG)`
  @media (max-width: 899px) {
    margin: 0 auto;
  }
`
const GearsSVG = styled(_GearsSVG)`
  @media (max-width: 899px) {
    margin: 0 auto;
  }
`

// will be separated

export default function Services () {
  return (
    <Container
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding='1rem'
    >
      <ServiceGroup>
        <RobotSVG />
        <TextWrapper>
          <Title>
            Automatização de Processos
          </Title>
          <Description>
            Fluxos de trabalho automatizados para tarefas manuais. Reduzindo transtornos por erro humano e melhorando o desempeho da equipe.
          </Description>
        </TextWrapper>
      </ServiceGroup>
      <ServiceGroup>
        <LayoutSVG />
        <TextWrapper>
          <Title>
            Design de UI/UX
          </Title>
          <Description>
            Interfaces de usuário legíveis, coloridas e interativas. Feitas para prender a atenção e facilitar a navegação pelo site ou aplicativo.
          </Description>
        </TextWrapper>
      </ServiceGroup>
      <ServiceGroup>
        <GearsSVG />
        <TextWrapper>
          <Title>
            Integração de Serviços
          </Title>
          <Description>
            Integração de diversas API e ferramentas que permitem agilizar o fluxo de trabalho e estender a capacidade da equipe.
          </Description>
        </TextWrapper>
      </ServiceGroup>
    </Container>
  )
}
