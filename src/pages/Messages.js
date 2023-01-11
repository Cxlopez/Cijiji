import React from 'react'
import "../styles/Messages.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

function Messages() {
  return (
    <div>
      <nav className='message-nav'>
        <p>My Messages</p>
      </nav>
      <div className='messages-text'>
      <FontAwesomeIcon icon={faMessage} className='messages-icon' />
      <span className='no-message-text'>You have no messages.</span>
      <span className='want-money'>Want to make some money?</span>
      <Link to="/post" className='messages-link'>Post an Ad</Link>
      </div>
    </div>
  )
}

export default Messages