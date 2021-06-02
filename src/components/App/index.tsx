import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import _App from './styled'
import Navbar from '../Navbar'
import PageRouter from '../PageRouter'

function App () {
  return (
    <_App>
      <Router>
        <Navbar />
        <PageRouter />
      </Router>
    </_App>
  )
}

export default App
