import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'

import { ReactComponent as _RobotSVG } from 'assets/svg/auto.svg'
import { ReactComponent as _LayoutSVG } from 'assets/svg/desktop-ui.svg'
import { ReactComponent as _GearsSVG } from 'assets/svg/integration.svg'

// will be separated
const ServiceGroup = styled.div`
`
const ServiceTitle = styled.h1``
const ServiceDescription = styled.p``

const RobotSVG = styled(_RobotSVG)``
const LayoutSVG = styled(_LayoutSVG)``
const GearsSVG = styled(_GearsSVG)``

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
        <ServiceTitle>
          Automatização de Processos
        </ServiceTitle>
        <ServiceDescription>
          Fluxos de trabalho automatizados com o objetivo de reduzir a intervenção humana com o objetivo de aumentar o rendimento e diminuir a carga de trabalhos repetitivos.
        </ServiceDescription>
      </ServiceGroup>
      <ServiceGroup>
        <LayoutSVG />
        <ServiceTitle>
          Design de UI/UX
        </ServiceTitle>
        <ServiceDescription>
          Interfaces de usuário legíveis, coloridas e interativas. Feitas para prender a atenção e facilitar a navegação pelo site ou aplicativo.
        </ServiceDescription>
      </ServiceGroup>
      <ServiceGroup>
        <GearsSVG />
        <ServiceTitle>
          Integração de Serviços
        </ServiceTitle>
        <ServiceDescription>
          Comunicação e integração entre diversas API que permitem o trabalho como um conjunto.
        </ServiceDescription>
      </ServiceGroup>
    </Container>
  )
}
