import './FavoritesWidget.css';
import React, { useState } from 'react';
import HotelsList from '../HotelsList/HotelsList';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesAction } from '../../store/favoriteHotelsReducer';

export default function FavoritesWidget({ isFavorites }) {

  const [filter, setFilter] = useState({ rating: false, price: false });
  const hotelsToShow = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  function sortHotels(arr, key) {
    return arr.sort((a, b) => a[key] > b[key] ? 1 : -1)
  }

  const handleFilter = (key) => {
    if (key === 'priceFrom') {
      setFilter({ ...filter, price: true, rating: false });
      dispatch(setFavoritesAction(sortHotels(hotelsToShow, key)));
    } else if (key === 'stars') {
      setFilter({ ...filter, price: false, rating: true });
      dispatch(setFavoritesAction(sortHotels(hotelsToShow, key)));
    }
  }

  return (
    <div className="card favorites">
      <h3 className="favorites__title">Избранное</h3>
      <div className="favorites__filter-container">
        <button
          className={`favorites__filter ${filter.rating ? 'favorites__filter_active' : ''} favorites__filter_rating`}
          onClick={() => handleFilter('stars')}>Рейтинг</button>
        <button
          className={`favorites__filter ${filter.price ? 'favorites__filter_active' : ''} favorites__filter_price`}
          onClick={() => handleFilter('priceFrom')}>Цена</button>
      </div>
      <HotelsList
        hotels={hotelsToShow}
        isFavorites={isFavorites}
      />
    </div>
  );
}
