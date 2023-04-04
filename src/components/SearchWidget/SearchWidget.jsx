import './SearchWidget.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHotels } from '../../store/hotelsReducer';
import Button from '../Button/Button';
import { setQueryAction } from '../../store/queryReducer';
import getCheckoutDate from '../../utils/getCheckoutDate';
import getCurrentDate from '../../utils/getCurrentDate';
import { BASE_URL } from '../../utils/consts';

export default function SearchWidget() {

  const [query, setQuery] = useState({ city: 'Москва', checkinDate: `${getCurrentDate()}`, duration: '1' });
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setQuery({
      ...query,
      [name]: value,
    });
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
    const checkoutDate = getCheckoutDate(query.checkinDate, query.duration);
    dispatch(fetchHotels(`${BASE_URL}location=${query.city}&currency=rub&checkIn=${query.checkinDate}&checkOut=${checkoutDate}&limit=30`))
    dispatch(setQueryAction(query));
  }

  return (
    <form className="card search-form">
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
  );
}