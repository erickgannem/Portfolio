import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from '../Navbar'
import PageRouter from '../PageRouter'

export default function App () {
  return (
      <Router>
        <Navbar />
        <PageRouter />
      </Router>
  )
}
