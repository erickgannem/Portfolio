import styled from 'styled-components'

import guidelines from 'guidelines'

interface MenuContentProps {
  isOpen: boolean
}

const { colors } = guidelines
const MenuContent = styled.div<MenuContentProps>`
  @media (max-width: 899px) {
    transition: transform 400ms;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: ${colors.darkBlueGreen};
    padding: 20px;
  }
`

export default MenuContent
