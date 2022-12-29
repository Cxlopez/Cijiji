import React from 'react'
import Categories from './Categories'
import Search from './Search'
import '../styles/Header.css'

function Header() {
  return (
    <div className='header-container'>
      <h1 className='logo'>Cijiji</h1>
      <Search />
      <Categories />
    </div>
  )
}

export default Header