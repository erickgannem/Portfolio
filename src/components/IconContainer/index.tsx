import React, { SVGProps } from 'react'
import styled from 'styled-components'
import guidelines from '../../guidelines'

interface IconContainerProps {
  color?: string;
  Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const { sizes } = guidelines
const _IconContainer = styled.div<{bgColor?: string}>`
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 100%;
  padding: ${sizes.rem['50px']}rem;
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
