import styled from 'styled-components'

type Props = {
  margin?: string
}
const SocialIconContainer = styled.li`
${
  ({ margin }: Props) => margin ? `margin: 0 ${margin}` : 'margin: 0'
}
  
`

export default SocialIconContainer
