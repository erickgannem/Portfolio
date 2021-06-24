import React from 'react'
import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const _Box = styled.div`
  display: flex;
  padding: 1rem;
  align-self: stretch;
  background: ${colors.darkBlueGreen};

  @media (min-width: 900px) {
    opacity: 0;
  }
`
const _Text = styled.p`
  margin: auto;
  color: ${colors.paleGrey1};
  font-weight: 600;
  font-size: 1.3rem;
`

export default function Indicator ({ path }: {path: string}) {
  let output = ''

  switch (path) {
    case 'About':
      output = 'Sobre Mim'
      break
    case 'Works':
      output = 'Projetos'
      break
    case 'Services':
      output = 'Habilidades'
      break
    case 'Contact':
      output = 'Contato'
      break
  }

  return (
    <_Box>
      <_Text>{output}</_Text>
    </_Box>
  )
}
