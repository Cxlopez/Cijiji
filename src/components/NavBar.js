import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faUser, faCamera, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'



function NavBar() {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li>
          <Link to="/" >
            <FontAwesomeIcon icon={faHouseUser} className='navBar-icon' />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/myCijiji">
            <FontAwesomeIcon icon={faUser} className='navBar-icon' />
            <span>My Cijiji</span>
          </Link>
        </li>
        <li>
          <Link to="/post">
            <FontAwesomeIcon icon={faCamera} className='navBar-icon' />
            <span>Post</span>
          </Link>
        </li>
        <li>
          <Link to="/favourites">
            <FontAwesomeIcon icon={faHeart} className='navBar-icon' />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FontAwesomeIcon icon={faComment} className='navBar-icon' />
            <span>Messages</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar