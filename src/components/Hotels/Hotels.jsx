import React from "react";
import { useDispatch } from 'react-redux';
import { fetchHotels } from '../../store/hotelsReducer';

export default function Hotels({hotels, favorites, addFavorite, delFavorite}) {
  const dispatch = useDispatch();
  return (
    <div className="search-results">
    <h1 className="login__title">
      Simple Hotel Check
    </h1>
    {console.log(hotels)}
    <ol>
      {hotels.length ?
        hotels.map((hotel) => (
          <li key={hotel.hotelId}>
            <div className="hotel__container">
              <h3>{hotel.hotelName}</h3>
              <p>{`Price from: ${hotel.priceFrom} rub`}</p>
              <p>{`Stars: ${hotel.stars}`}</p>
              <button style={{ width: '250px', marginTop: '10px' }} onClick={() => addFavorite(hotel)}>Add to favorites</button>
              {favorites.includes(hotel.hotelId) &&
                <button style={{ width: '250px', marginTop: '10px' }} onClick={() => delFavorite(hotel.hotelId)}>Delete from favorites</button>
              }
            </div>
          </li>
        )) :
        <li>Hotels not found</li>
      }
    </ol>
    <button style={{ width: '250px' }} onClick={() => dispatch(fetchHotels())}>Fetch hotels</button>
  </div>
  )
}