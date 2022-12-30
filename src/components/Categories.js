import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faComputer, faPaw, faHouseChimney } from '@fortawesome/free-solid-svg-icons'


function Categories() {

  return (
    <div>

      <ul className='categories'>
        <li>
          <FontAwesomeIcon icon={faCar} className='categories-icon' />
          <span>Autos</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faComputer} className='categories-icon'/>
          <span>Tech</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHouseChimney} className='categories-icon'/>
          <span>Homes</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPaw} className='categories-icon'/>
          <span>Pets</span>
        </li>
      </ul>
    </div>
  )
}

export default Categories