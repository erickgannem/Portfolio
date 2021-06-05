import React, { SVGProps } from 'react'
import styled from 'styled-components'

interface IconContainerProps {
  color?: string;
  Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const _IconContainer = styled.div<{bgColor?: string}>`
  border-radius: 100%;
  background-color: ${({ bgColor }) => bgColor || ''};
`

function IconContainer ({ color, Icon }: IconContainerProps) {
  return (
    <_IconContainer bgColor={color}>
      <Icon />
    </_IconContainer>
  )
}

export default IconContainer
