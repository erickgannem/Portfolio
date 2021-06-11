import React from 'react'
import styled from 'styled-components'
import { IoMenu } from 'react-icons/io5'

import guidelines from '../../../guidelines'

const Wrapper = styled.button`
  border: none;
  background: inherit;
  @media (min-width: 900px) {
    display: none;
  }
`

export default function MenuButton () {
  const { colors, sizes } = guidelines
  return (
    <Wrapper>
      <IoMenu size={sizes.rem['30px'] + 'rem'} color={colors.darkBlueGreen} />
    </Wrapper>
  )
}
