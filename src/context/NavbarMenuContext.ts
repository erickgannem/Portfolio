import React from 'react'

interface I {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavbarMenuContext = React.createContext<I>({
  isOpen: false,
  setIsOpen: () => {}
})

export default NavbarMenuContext
