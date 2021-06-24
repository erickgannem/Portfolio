import styled from 'styled-components'
import guidelines from 'guidelines'

const { colors } = guidelines

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.paleGrey2};
  box-shadow: 1px 1px 15px ${colors.shadow30};
  z-index: 100;
  position: relative;
`
export default Nav
