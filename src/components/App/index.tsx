import React from 'react'

import _App from './styled'
import Navbar from '../Navbar'
import PageRouter from '../PageRouter'

function App () {
  return (
    <_App>
      <Navbar />
      <PageRouter />
    </_App>
  )
}

export default App
