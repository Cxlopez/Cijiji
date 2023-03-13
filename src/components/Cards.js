import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import "../styles/Cards.css"


function Cards() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/ads')
      .then((res) => {
        setAds(res.data.ads);

      })
  }, [])


  return (
    <div className='card-container'>
    <div className='cards'>
      {
        ads.map(ad => (
          <CardItem key={ad.id} ad={ad} />
        ))
      }
    </div>
    </div>
  )
}

export default Cards