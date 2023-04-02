import './MainScreen.css'
import React from 'react';
import Header from '../Header/Header';
import Hotels from '../Hotels/Hotels';
import Button from '../Button/Button';
import Favorites from '../Favorites/Favorites';

export default function MainScreen({ handleSignout }) {

  const handleSearch = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <Header handleSignout={handleSignout} />
      <main className="content">
        <div className="side-container">
          <form action="#" className="card search-form">
            <label htmlFor="city">Локация</label>
            <input type="text" id="city" />
            <label htmlFor="chekin-date">Дата заселения</label>
            <input type="date" id="chekin-date" />
            <label htmlFor="duration">Количество дней</label>
            <input type="text" id="duration" />
            <Button
              name={'Найти'}
              selector={'button'}
              type={'submit'}
              isDisabled={false}
              handleClick={handleSearch}
            />
          </form>
          <Favorites
            isFavorites={true}
          />
        </div>
        <Hotels
          isFavorites={false}
        />
      </main>
    </>
  )
}