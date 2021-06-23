import styled from 'styled-components'

const DesktopIconsWrapper = styled.ul`
    display: flex;
    list-style: none;

    @media (max-width: 899px) {
      display: none;
    }
    @media (min-width: 900px) {
      margin: 1rem;
    }
`

export default DesktopIconsWrapper
