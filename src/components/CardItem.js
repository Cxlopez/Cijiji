import { React } from 'react';
import "../styles/Cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function CardItem({ad}) {
  return (
    <div className='card-container'>
      <div className='cards'>
        <div className='card'>
          <img src={ad.thumbnail_url} alt="car" />
          <p>{ad.title}</p>
          <span>{ad.price}</span>
          <FontAwesomeIcon icon={faHeart} className='card-icon' />
        </div>
      </div>
    </div>
  )
}

export default CardItem