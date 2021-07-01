import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavbarMenuContext from 'context/NavbarMenuContext'
import Navbar from 'components/Navbar'
import PageRouter from 'components/PageRouter'

export default function App () {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Router>
      <NavbarMenuContext.Provider value={{ isOpen, setIsOpen }}>
        <Navbar />
        <PageRouter />
      </NavbarMenuContext.Provider>

    </Router>
  )
}
