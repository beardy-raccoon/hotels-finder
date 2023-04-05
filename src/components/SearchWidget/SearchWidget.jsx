import React, { useState, useEffect } from 'react';
import './SearchWidget.css';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { fetchHotelsAction } from '../../store/hotelsReducer';
import { setQueryAction } from '../../store/queryReducer';
import getCheckoutDate from '../../utils/getCheckoutDate';
import getCurrentDate from '../../utils/getCurrentDate';

export default function SearchWidget() {

  const [query, setQuery] = useState({ city: 'Москва', checkinDate: `${getCurrentDate()}`, duration: '1' });
  const dispatch = useDispatch();
  const checkoutDate = getCheckoutDate(query.checkinDate, query.duration);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setQuery({
      ...query,
      [name]: value,
    });
  }

  const searchHandler = () => {
    dispatch(fetchHotelsAction({
      city: query.city,
      checkinDate: query.checkinDate,
      checkoutDate: checkoutDate
    }));
    dispatch(setQueryAction(query));
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    searchHandler();
  };
  // useEffect обработает при первой загрузке компонента или перезагрузке страницы
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => searchHandler(), []);

  return (
    <div className="search-widget card card_search-widget">
      <form className="search-form">
        <label className="search-form__label" htmlFor="city">Локация</label>
        <input
          className="input search-form__input"
          type="text"
          name="city"
          value={query.city}
          onChange={handleChange}
          required />
        <label className="search-form__label" htmlFor="chekinDate">Дата заселения</label>
        <input
          className="input search-form__input"
          type="date"
          name="checkinDate"
          value={query.checkinDate}
          onChange={handleChange}
          required />
        <label className="search-form__label" htmlFor="duration">Количество дней</label>
        <input
          className="input search-form__input"
          type="number"
          name="duration"
          value={query.duration}
          onChange={handleChange}
          required />
        <Button
          name={'Найти'}
          selector={'button button__search-widget'}
          type={'submit'}
          isDisabled={false}
          handleClick={handleSearch}
        />
      </form>
    </div>
  );
}