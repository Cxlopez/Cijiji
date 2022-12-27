import React from 'react'
import Categories from './Categories'
import Search from './Search'

function Header() {
  return (
    <div>
      <h1>Cijiji</h1>
      <Search />
      <Categories />
    </div>
  )
}

export default Header