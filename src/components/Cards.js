import React from 'react'
import "../styles/Cards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Cards() {
  return (
    <div className='card-container'>
      <div className='cards'>
        <div className='card'>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg" alt="car" />
          <p>lamborghini 10/10</p>
          <span>price</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
        <div className='card'>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg" alt="car" />
          <p>lamborghini 10/10</p>
          <span>price</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
        <div className='card'>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg" alt="car" />
          <p>lamborghini 10/10</p>
          <span>price</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
        <div className='card'>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg" alt="car" />
          <p>lamborghini 10/10</p>
          <span>price</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
        <div className='card'>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg" alt="car" />
          <p>lamborghini 10/10</p>
          <span>price</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
        <div className='card'>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg" alt="car" />
          <p>lamborghini 10/10</p>
          <span>price</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
      </div>
    </div>
  )
}

export default Cards