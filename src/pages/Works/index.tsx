import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import Text from 'components/Text'
import Image from 'components/Image'

import Placeholder from 'assets/images/comingsoon.png'

import guidelines from 'guidelines'

// Will be separated
const { colors } = guidelines

const ImageGroup = styled.div`
  display: flex;
  @media (max-width: 899px) {
    flex-direction: column;
    align-items: center;
  }
  
`
const GroupItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
background-color: ${colors.darkBlueGreen90};
max-width: 25rem;
border-radius: 10px;
box-shadow: 1px -1px 10px ${colors.shadow60};

@media (max-width: 899px) {
  margin: 1.5rem 0 0 0;
}
`

// Will be separated

export default function Works () {
  return (
    <Container
      padding='1rem'
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
    >
      <ImageGroup>
        <GroupItem>
          <Image src={Placeholder} width='100%' borderRadius='10px 10px 0 0'/>
          <Text padding='1rem' color={colors.paleGrey2}>
            {'Clicksign Asaas Integration'}
          </Text>
        </GroupItem>
        <GroupItem>
          <Image src={Placeholder} width='100%' borderRadius='10px 10px 0 0'/>
          <Text padding='1rem' color={colors.paleGrey2}>
            {'SPA React Flower Shop'}
          </Text>
        </GroupItem>
        <GroupItem>
          <Image src={Placeholder} width='100%' borderRadius='10px 10px 0 0'/>
          <Text padding='1rem' color={colors.paleGrey2}>
            {'Automatic invoices integration'}
          </Text>
        </GroupItem>
      </ImageGroup>
    </Container>
  )
}
