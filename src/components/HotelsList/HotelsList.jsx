import React from 'react';
import './HotelsList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteAction, delFavoriteAction } from '../../store/favoriteHotelsReducer';
import HotelsItem from '../HotelsItem/HotelsItem';

export default function HotelsList({ hotels, isFavorites }) {
  const query = useSelector(state => state.query.query)
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const addFavorite = (hotel) => {
    const newHotel = { ...hotel, checkinDate: query.checkinDate, duration: query.duration };
    dispatch(addFavoriteAction(newHotel));
  }

  const delFavorite = (hotelId) => {
    dispatch(delFavoriteAction(hotelId));
    favorites.length === 1 && localStorage.setItem('storedFavorites', JSON.stringify([]))
  }

  return (
    <ul className={`${isFavorites ? 'hotels__list_favorites' : 'hotels__list'}`}>
      {hotels?.length !== 0 &&
        hotels?.map((hotel) => (
          <HotelsItem
            key={hotel.hotelId}
            hotel={hotel}
            favorites={favorites}
            isFavorites={isFavorites}
            handleAddFavotite={addFavorite}
            handleDelFavorite={delFavorite}
          />
        ))
      }
    </ul>
  );
}