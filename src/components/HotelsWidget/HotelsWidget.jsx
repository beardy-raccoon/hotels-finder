import './HotelsWidget.css'
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
      <div className="hotels__title-container">
        <div className="hotels__group-container">
          <h2 className="hotels__title">Отели</h2>
          <span className="hotels__arrow"></span>
          <span className="hotels__title">{query.city}</span>
        </div>
        <p className="hotels__subtitle">{`${modifyDate(query.checkinDate, 'ru')}`}</p>
      </div>
      <ImageCarousel />
      <div className="hotels__favorite-counter-container">
        <p className="hotels__favorite-counter">Добавлено в Избранное:</p>
        <span className="hotels__count">{favorites.length}</span>
        <span className="hotels__favorite-counter">{modifyString(favorites.length)}</span>
      </div>
      <HotelsList
        isFavorites={isFavorites}
        hotels={hotelsToShow}
      />
    </div>
  );
}