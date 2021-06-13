import React from 'react'
import styled from 'styled-components'

import guidelines from '../../../guidelines'

const { colors } = guidelines

const _Box = styled.div`
  display: flex;
  padding: 1rem;
  align-self: stretch;
  background: ${colors.darkBlueGreen};
`
const _Text = styled.p`
  margin: auto;
  color: ${colors.paleGrey1};
  font-weight: 600;
  font-size: 1.3rem;
`

export default function Indicator ({ path }: {path: string}) {
  return (
    <_Box>
      <_Text>{path}</_Text>
    </_Box>
  )
}
