import './Hotels.css'
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../../store/hotelsReducer';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import HotelsList from '../HotelsList/HotelsList';

export default function Hotels({isFavorites}) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const hotelsToShow = useSelector(state => state.hotels.hotels);

  return (
    <div className="hotels card">
      <div className="hotel__title-container">
        <h2 className="hotels__title">
          {`Hotels > Moscow`}
        </h2>
        <p className="hotels__subtitle">03 апреля 2023</p>
      </div>
      <ImageCarousel />
      <p className="hotels__favorite-counter">{`Добавлено в Избранное: ${favorites.length} отеля`}</p>
      <HotelsList
        isFavorites={isFavorites}
        hotels={hotelsToShow}
      />
      <button style={{ width: '250px' }} onClick={() => dispatch(fetchHotels())}>Fetch hotels</button>
    </div>
  )
}