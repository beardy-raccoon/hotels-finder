import React from 'react';
import './HotelsItem.css';
import { useSelector } from 'react-redux';
import modifyDate from '../../utils/dateModifier';
import modifyString from '../../utils/stringModifier';
import getRating from '../../utils/getRating';


export default function HotelsItem({ hotel, isFavorites, favorites, handleAddFavotite, handleDelFavorite }) {

  const query = useSelector(state => state.query.query);

  return (
    <li className="hotel__item">
      <div className="hotel__container">
        {!isFavorites && <div className="hotel__logo"></div>}
        <div className={`hotel__info-container ${isFavorites ? 'hotel__info-container_favorites' : ''}`}>
          <h3 className="hotel__title">{hotel.hotelName}</h3>
          {isFavorites ?
            <p className="hotel__duration">{`${modifyDate(hotel.checkinDate, 'en')} - ${modifyString(hotel.duration, 'день')}`}</p>
            :
            <p className="hotel__duration">{`${modifyDate(query.checkinDate, 'ru')} - ${modifyString(query.duration, 'день')}`}</p>
          }
          <ul className="hotel__rating">
            {getRating(hotel).map((item, i) =>
              (<li className={`${item === 1 ? 'hotel__star_active' : 'hotel__star'}`} key={i}></li>)
            )}
          </ul>
        </div>
        <div className={`hotel__button-container ${isFavorites ? 'hotel__button-container_favorites' : ''}`}>
          {favorites?.find(item => item.hotelId === hotel.hotelId) ?
            <button className="button hotel__button hotel__button_del" onClick={() => handleDelFavorite(hotel.hotelId)}></button>
            :
            <button className="button hotel__button hotel__button_add" onClick={() => handleAddFavotite(hotel)}></button>
          }
          <div className="hotel__price-container">
            <span className="hotel__price" >Price:</span>
            <span className="hotel__price-value">{`${Math.round(hotel.priceFrom)} ₽`}</span>
          </div>
        </div>
      </div>
    </li>
  );
}