import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../styles/CardItem.css"

function CardItem({ad}) {
  return (


        <div className='card'>
          <img src={ad.thumbnail_url} alt="car" />
          <p>{ad.title}</p>
          <span>{ad.price}</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>


  )
}

export default CardItem