import './Favorites.css';
import React from 'react';
import HotelsList from '../HotelsList/HotelsList';
import { useSelector } from 'react-redux';

export default function Favorites({ isFavorites }){
  const hotelsToShow = useSelector(state => state.favorites.favorites);
  return (
    <div className="card favorites">
    <h3>Избранное</h3>
    <p>Here'll be filters</p>
    <HotelsList
      hotels={hotelsToShow}
      isFavorites={isFavorites}
    />
  </div>
  )
}

/*<ul style={{ listStyle: 'none', padding: 0}}>
{favorites.length !== 0 ?
  favorites.map(hotel => (
    <li key={hotel.hotelId}>
      <h4>{hotel.hotelName}</h4>
      <p>{`Price from: ${hotel.priceFrom} rub`}</p>
      <p>{`Stars: ${hotel.stars}`}</p>
    </li>
  )) :
  <p>Nothing</p>
}
</ul>*/