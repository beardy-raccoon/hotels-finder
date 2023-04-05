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
    dispatch(fetchHotelsAction({ city: query.city, checkinDate: query.checkinDate, checkoutDate: checkoutDate }))
    dispatch(setQueryAction(query));
  }

  const firstFetch = () => dispatch(fetchHotelsAction({ city: query.city, checkinDate: query.checkinDate, checkoutDate: getCheckoutDate(query.checkinDate, query.duration) }))

  useEffect(() => {
    firstFetch();
    console.log('1st fetch in widget');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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