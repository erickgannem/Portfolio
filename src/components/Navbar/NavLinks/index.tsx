import styled from 'styled-components'

const NavLinks = styled.ul`
  display: flex;

  @media (max-width: 899px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 6rem;
    right: 0;
  }
`

export default NavLinks
