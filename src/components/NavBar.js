import React from 'react'
import '../styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faUser, faCamera, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'



function NavBar() {
  return (
    <nav className='nav'>
      <ul className='navList'>
        <li>
          <a href="/" className='navBar-icon'>
      <FontAwesomeIcon icon={faHouseUser} />
      <span>Home</span>
      </a>
        </li>
        <li>
          <a href="/myCijiji">
          <FontAwesomeIcon icon={faUser} className='navBar-icon'/>
          <span>My Cijiji</span>
          </a>
        </li>
        <li>
          <a href="/post">
          <FontAwesomeIcon icon={faCamera} className='navBar-icon'/>
          <span>Post</span>
          </a>
        </li>
        <li>
          <a href="/favourites">
          <FontAwesomeIcon icon={faHeart} className='navBar-icon'/>
          <span>Favourites</span>
          </a>
        </li>
        <li>
          <a href="/messages">
          <FontAwesomeIcon icon={faComment} className='navBar-icon'/>
          <span>Messages</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar