import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  padding: 1rem;
`

export default function Indicator ({ path }: {path: string}) {
  return (
    <Box>
      {path}
    </Box>
  )
}
