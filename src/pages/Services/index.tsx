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
    padding: 2rem;
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
    font-size: 2.3rem;
    text-align: center;
    margin: 1.5rem 0 0.8rem 0;
  }
`
const Description = styled.p`
  color: ${colors.darkBlueGreen};
  @media (min-width: 0) {
    text-align: center;
    font-size: 1.3rem;
  } 
`
const TextWrapper = styled.div`
  @media (min-width: 0) {
  }
`
const AutomationSVG = styled(_AutomationSVG)`
  @media (min-width: 0) {
    margin: 0 auto;
  }
`
const LayoutSVG = styled(_LayoutSVG)`
  @media (min-width: 0) {
    margin: 0 auto;
  }
`
const IntegrationSVG = styled(_IntegrationSVG)`
  @media (min-width: 0) {
    margin: 0 auto;
  }
`

const SVGWrapper = styled.div`
  background: ${colors.paleGrey2};
  border-radius: 100%;
  padding: 4rem;
  margin: 0 auto;
  box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.1);

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
            Fluxos de trabalho automatizados para tarefas manuais. Reduzindo transtornos por erro humano e melhorando o desempeho da equipe.
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
            Interfaces de usuário legíveis, coloridas e interativas. Feitas para prender a atenção e facilitar a navegação pelo site ou aplicativo.
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
            Integração de diversas API e ferramentas que permitem agilizar o fluxo de trabalho e estender a capacidade da equipe.
          </Description>
        </TextWrapper>
      </ServiceGroup>
    </_Container>
  )
}
