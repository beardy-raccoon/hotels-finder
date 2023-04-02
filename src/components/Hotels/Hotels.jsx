import './Hotels.css'
import React from "react";
import { useDispatch } from 'react-redux';
import { fetchHotels } from '../../store/hotelsReducer';

export default function Hotels({ hotels, favorites, addFavorite, delFavorite }) {
  const dispatch = useDispatch();
  return (
    <div className="search-results">
      <h2 className="login__title">
        {`Hotels > Moscow`}
      </h2>
      {console.log(hotels)}
      <ul style={{ listStyle: 'none', padding: 0}}>
        {hotels.length ?
          hotels.map((hotel) => (
            <li key={hotel.hotelId}>
              <div className="hotel__container">
                <h3>{hotel.hotelName}</h3>
                <p>{`Price from: ${hotel.priceFrom} rub`}</p>
                <p>{`Stars: ${hotel.stars}`}</p>
                {favorites.find(item => item.hotelId === hotel.hotelId) ?
                  <button style={{ width: '250px', marginTop: '10px' }} onClick={() => delFavorite(hotel.hotelId)}>Delete from favorites</button>
                  :
                  <button style={{ width: '250px', marginTop: '10px' }} onClick={() => addFavorite(hotel)}>Add to favorites</button>
                }
              </div>
            </li>
          )) :
          <li>Hotels not found</li>
        }
      </ul>
      <button style={{ width: '250px' }} onClick={() => dispatch(fetchHotels())}>Fetch hotels</button>
    </div>
  )
}