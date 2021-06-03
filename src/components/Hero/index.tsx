import React from 'react'

import styled from 'styled-components'

import styling from '../../styling'

const { sizes, colors } = styling

const _Hero = styled.div`
  background-color: ${colors.paleyGrey2};
  padding: ${sizes.rem['15px']}rem;
  border-radius: ${sizes.rem['5px']}rem;
`

type HeroProps = {
  children: React.ReactNode
}
export default function Hero ({ children }: HeroProps) {
  return (
    <_Hero>
      {children}
    </_Hero>
  )
}
