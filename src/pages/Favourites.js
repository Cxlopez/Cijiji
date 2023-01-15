import React from 'react'
import "../styles/Favourites.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Favourites() {
  return (
    <div>
      <nav className='favourites-nav'>
        <p>Favourites</p>
      </nav>
      <div className='favourites-text'>
      <FontAwesomeIcon icon={faHeart} className='favourites-icon' />
      <span className='no-favourites-text'>Your Favourites are empty.</span>
      <span className='add-favourites'>Save listings to your Favourites by tapping on the heart icon.</span>
      <Link to="/" className='favourites-link'>Search for Listings</Link>
      </div>
    </div>
  )
}

export default Favourites