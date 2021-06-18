import styled from 'styled-components'

import guidelines from 'guidelines'

const { colors } = guidelines

const GroupItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
background-color: ${colors.darkBlueGreen90};
max-width: 25rem;
border-radius: 10px;
box-shadow: 1px -1px 10px ${colors.shadow60};

@media (max-width: 899px) {
  margin: 1.5rem 0 0 0;
}
`

export default GroupItem
