import React from 'react'
import "../styles/Post.css"
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Post() {
  return (
    <div>
      <nav className='post-nav'>
        <p>Post</p>
      </nav>
      <div>
        <FontAwesomeIcon icon={faCameraRetro}/>
      </div>
    </div>
  )
}

export default Post