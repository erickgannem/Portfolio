import React from 'react'
import styled from 'styled-components'

const _Container = styled.div``

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
