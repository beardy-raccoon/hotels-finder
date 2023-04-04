import './Hotels.css'
import React from "react";
import { useSelector } from 'react-redux';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import HotelsList from '../HotelsList/HotelsList';
import modifyDate from '../../utils/dateModifier';
import modifyString from '../../utils/stringModifier';

export default function HotelsWidget({ isFavorites }) {
  const favorites = useSelector(state => state.favorites.favorites);
  const hotelsToShow = useSelector(state => state.hotels.hotels);
  const query = useSelector(state => state.query.query);

  return (
    <div className="card card_hotels">
      <div className="hotel__title-container">
        <h2 className="hotels__title">
          {`Отели > ${query.city}`}
        </h2>
        <p className="hotels__subtitle">{`${modifyDate(query.checkinDate, 'ru')}`}</p>
      </div>
      <ImageCarousel />
      <p className="hotels__favorite-counter">{`Добавлено в Избранное: ${modifyString(favorites.length)}`}</p>
      <HotelsList
        isFavorites={isFavorites}
        hotels={hotelsToShow}
      />
    </div>
  );
}