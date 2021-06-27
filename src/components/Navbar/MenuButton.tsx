import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { IoMenu } from 'react-icons/io5'

import guidelines from 'guidelines'

const Wrapper = styled.button<{isOpen: boolean, right?: string}>`
  position: ${({ isOpen }) => isOpen && 'fixed'};
  right: ${({ isOpen }) => isOpen && 0};
  border: none;
  padding: 1rem;
  z-index: 200;
  outline: none;
  background: rgba(0, 0, 0, 0);
  @media (min-width: 900px) {
    display: none;
  }
`

interface MenuButtonProps {
  clickHandler: MouseEventHandler<HTMLElement>
  isOpen: boolean
}

export default function MenuButton ({ clickHandler, isOpen }: MenuButtonProps) {
  const { colors } = guidelines
  return (
    <Wrapper isOpen={isOpen} onClick={clickHandler}>
      <IoMenu
        size='2rem'
        color={isOpen ? colors.coolGrey : colors.darkBlueGreen} />
    </Wrapper>
  )
}
