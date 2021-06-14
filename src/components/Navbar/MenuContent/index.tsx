import styled from 'styled-components'

interface MenuContentProps {
  isOpen: boolean
}

const MenuContent = styled.div<MenuContentProps>`

  @media (max-width: 899px) {
    display: ${({ isOpen }) => !isOpen && 'none'}
  }
  
`

export default MenuContent
