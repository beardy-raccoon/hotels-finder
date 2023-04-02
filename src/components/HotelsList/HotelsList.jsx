import './HotelsList.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteAction, delFavoriteAction } from '../../store/favoriteHotelsReducer';
import HotelsItem from '../HotelsItem/HotelsItem';

export default function HotelsList({ hotels, isFavorites }) {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.favorites);

  const addFavorite = (hotel) => {
    dispatch(addFavoriteAction(hotel));
  }

  const delFavorite = (hotelId) => {
    dispatch(delFavoriteAction(hotelId));
  }

  return (
    <ul className={`${isFavorites ? 'hotels__list_favorites' : 'hotels__list'}`}>
      {hotels?.length !== 0 &&
        hotels.map((hotel) => (
          <HotelsItem
            key={hotel.hotelId}
            hotel={hotel}
            isFavorites={isFavorites}
            favorites={favorites}
            handleAddFavotite={addFavorite}
            handleDelFavorite={delFavorite}
          />
        ))
      }
    </ul>
  )
}