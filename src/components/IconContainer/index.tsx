import React, { SVGProps } from 'react'
import styled from 'styled-components'
import guidelines from '../../guidelines'
interface _IconContainerProps {
  bgColor?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
}
interface IconContainerProps extends _IconContainerProps {
  Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const { sizes } = guidelines
const _IconContainer = styled.div<_IconContainerProps>`
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 100%;
  padding: ${sizes.rem['50px']}rem;
  background-color: ${({ bgColor }) => bgColor || ''};
`

function IconContainer (props: IconContainerProps) {
  const { Icon } = props
  return (
    <_IconContainer {...props}>
      <Icon />
    </_IconContainer>
  )
}

export default IconContainer
