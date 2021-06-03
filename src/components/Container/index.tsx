import React from 'react'
import styled from 'styled-components'

import styling from '../../styling'

const { sizes } = styling

const _Container = styled.div`
  padding: ${sizes.rem['30px']}rem;
`

type ContainerProps = {
  children: React.ReactNode
}

export default function Container ({ children }: ContainerProps) {
  return (
    <_Container>
      {children}
    </_Container>
  )
}
