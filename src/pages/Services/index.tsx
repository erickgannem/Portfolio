import React from 'react'
import styled from 'styled-components'

import { ReactComponent as _AutomationSVG } from 'assets/svg/auto.svg'
import { ReactComponent as _LayoutSVG } from 'assets/svg/desktop-ui.svg'
import { ReactComponent as _IntegrationSVG } from 'assets/svg/integration.svg'

import guidelines from 'guidelines'
import NavbarMenuContext from 'context/NavbarMenuContext'

const { colors } = guidelines

// will be separated
const _Container = styled.div`
  @media (min-width: 0) {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
const ServiceGroup = styled.div`

  @media (min-width: 0) {
    display: flex;
    flex-direction: column;
    ${this}:nth-child(2) {
      margin-top: 4.5rem;
      margin-bottom: 4.5rem;
    }
  }
  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${this}:first-child {
      flex-direction: row-reverse;
    }
    ${this}:last-child {
      flex-direction: row-reverse;
    }
  }

`
const Title = styled.h1`
  font-weight: bolder;
  color: ${colors.darkBlueGreen};
  @media (min-width: 0) {
    font-size: 1.6rem;
    text-align: center;
    margin: 1.5rem 0 0.8rem 0;
  }
`
const Description = styled.p`
  color: ${colors.darkBlueGreen};
  @media (min-width: 0) {
    text-align: center;
    font-size: 1.15rem;
  } 
`
const TextWrapper = styled.div`
  @media (min-width: 450px) {
    padding: 0 4.5rem;
  }
  @media (min-width: 1000px) {
    padding: 0 5rem;
  }
  @media (min-width: 1140px) {
    padding: 0 6rem;
  }
  @media (min-width: 1160px) {
    padding: 7rem;
  }    
`
const AutomationSVG = styled(_AutomationSVG)`
  @media (min-width: 0) {
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }
`
const LayoutSVG = styled(_LayoutSVG)`
  @media (min-width: 0) {
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }
`
const IntegrationSVG = styled(_IntegrationSVG)`
  @media (min-width: 0) {
    margin: 0 auto;
    width: 150px;
    height: 150px;

  }
`
const SVGWrapper = styled.div`
  background: ${colors.paleGrey2};
  margin: 0 auto;
  padding: 30px;
  border-radius: 50%;
  border: 1px solid ${colors.coolGrey2};  

  @media (min-width: 650px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

// will be separated

export default function Services () {
  const { setIsOpen } = React.useContext(NavbarMenuContext)
  React.useEffect(() => {
    setIsOpen(false)
  }, [])
  return (
    <_Container>
      <ServiceGroup>
        <SVGWrapper>
          <AutomationSVG />
        </SVGWrapper>
        <TextWrapper>
          <Title>
            Automatização de Processos
          </Title>
          <Description>
            Fluxos de trabalho automatizados para tarefas manuais e repetitivas com o uso das tecnologías mais eficientes e recentes. Reduzindo assim transtornos devido a erro humano e melhorando o desempeho da equipe.
          </Description>
        </TextWrapper>
      </ServiceGroup>
      <ServiceGroup>
        <SVGWrapper>
          <LayoutSVG />
        </SVGWrapper>
        <TextWrapper>
          <Title>
            Design de UI/UX
          </Title>
          <Description>
            Interfaces de usuário legíveis, coloridas e bem distribuidas para sites na internet ou aplicativos mobile (Android, iOS). Especialmente projetadas para prender a atenção e facilitar a navegação e interação.
          </Description>
        </TextWrapper>
      </ServiceGroup>
      <ServiceGroup>
        <SVGWrapper>
          <IntegrationSVG />
        </SVGWrapper>
        <TextWrapper>
          <Title>
            Integração de Serviços
          </Title>
          <Description>
            Integração de diversas plataformas e
            ferramentas que se traduzem em agilidade
            e produtividade para a equipe.
            Fazendo com que tarefas que dependem de muitas
            etapas possam ser realizadas como um só conjunto.
          </Description>
        </TextWrapper>
      </ServiceGroup>
    </_Container>
  )
}
