import styled from 'styled-components'

import guidelines from 'guidelines'

interface MenuContentProps {
  isOpen: boolean
}

const { colors } = guidelines
const MenuContent = styled.div<MenuContentProps>`
  @media (max-width: 899px) {
    display: ${({ isOpen }) => !isOpen && 'none'};
    width: 100%;
    position: absolute;
    top: 5rem;
    left: 0;
    background: ${colors.darkBlueGreen90};
    padding: 1rem;
  }
`

export default MenuContent
