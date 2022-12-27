import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon="" />

function Search() {
  return (
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder=''/>
    </div>
  )
}

export default Search