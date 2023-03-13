import React from 'react'
import NavBar from './Navbar'

const Header = () => {
  const isHeader = true
  return (
    <header>
            <NavBar isHeader={isHeader} />
    </header>
  )
}

export default Header