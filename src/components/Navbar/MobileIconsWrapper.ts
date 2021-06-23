import styled from 'styled-components'

const MobileIconsWrapper = styled.ul`
    display: flex;
    list-style: none;

    @media (max-width: 899px) {
        justify-content: center;
        margin-top: 2rem;
    }
    @media (min-width: 900px) {
        display: none;
    }
`

export default MobileIconsWrapper
