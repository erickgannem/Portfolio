import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../Navbar'
import PageRouter from '../PageRouter'

const Wrapper = styled.div``
export default function App () {
  return (
      <Router>
        <Wrapper>
          <Navbar />
          <PageRouter />
        </Wrapper>
      </Router>
  )
}
