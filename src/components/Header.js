import React from 'react'
import { Helmet } from "react-helmet"
import Categories from './Categories'
import Search from './Search'
import '../styles/Header.css'

function Header() {
  return (
    <div className='header-container'>
      <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
      <div className='logo-search'>
      <h1 className='logo'>Cijiji</h1>
      <Search />
      </div>
      <Categories />
    </div>
  )
}

export default Header