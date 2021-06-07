import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from '../Navbar'
import PageRouter from '../PageRouter'

const _App = styled.div`
  display: grid;
  grid-template-rows: 0fr 1fr;
  height: 100%;
`

export default function App () {
  return (
    <_App>
      <Router>
        <Navbar />
        <PageRouter />
      </Router>
    </_App>
  )
}
