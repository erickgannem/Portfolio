import React from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

import guidelines from '../../guidelines'

interface IconProps {
  IconComponent: IconType
  size: string | number
}

export default function Icon ({ IconComponent, size }: IconProps) {
  const { colors } = guidelines

  const _Icon = styled(IconComponent)`
    @media (max-width: 899px) {
      color: ${colors.greenBlue};
    }
  `

  return <_Icon size={size} />
}
