import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function Search() {
  return (
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input className='search-bar' type="text"  placeholder='Search for anything...'/>
    </div>
  )
}

export default Search