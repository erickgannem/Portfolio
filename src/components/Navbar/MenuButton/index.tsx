import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { IoMenu } from 'react-icons/io5'

import guidelines from '../../../guidelines'

const Wrapper = styled.button`
  border: none;
  background: inherit;
  padding: 1rem;
  @media (min-width: 900px) {
    display: none;
  }
`

interface MenuButtonProps {
  clickHandler: MouseEventHandler<HTMLElement>
}

export default function MenuButton ({ clickHandler }: MenuButtonProps) {
  const { colors, sizes } = guidelines
  return (
    <Wrapper onClick={clickHandler}>
      <IoMenu size={sizes.rem['30px'] + 'rem'} color={colors.darkBlueGreen} />
    </Wrapper>
  )
}
