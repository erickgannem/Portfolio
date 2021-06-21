import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'

const ServiceGroup = styled.div`

`

export default function Services () {
  return (
    <Container
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding='1rem'
    >
      <ServiceGroup>
        automation
      </ServiceGroup>
      <ServiceGroup>
        design
      </ServiceGroup>
      <ServiceGroup>
        integration
      </ServiceGroup>
    </Container>
  )
}
