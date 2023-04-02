import './MainScreen.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteAction, delFavoriteAction } from '../../store/favoriteHotelsReducer';
import Header from '../Header/Header';
import Hotels from '../Hotels/Hotels';
import Button from '../Button/Button';

export default function MainScreen({ handleSignout }) {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const hotels = useSelector(state => state.hotels.hotels);

  const addFavorite = (hotel) => {
    console.log(hotel)
    dispatch(addFavoriteAction(hotel));
  }

  const delFavorite = (hotelId) => {
    console.log(hotelId)
    dispatch(delFavoriteAction(hotelId));
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
    <Header handleSignout={handleSignout}/>
    <main className="login" style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '32px' }}>
    <div className="side-container">
        <form action="#" className="search-form">
          <label for="city">Локация</label>
          <input type="text" id="city" />
          <label for="chekin-date">Дата заселения</label>
          <input type="date" id="chekin-date" />
          <label for="duration">Количество дней</label>
          <input type="text" id="duration" />
          <Button
            name={'Найти'}
            selector={'button'}
            type={'submit'}
            isDisabled={false}
            handleClick={handleSearch}
          />
        </form>
        <div className="favorites">
          <h3>Favorites</h3>
          <p>Here'll be filters</p>
          {console.log('fav', favorites)}
          <ul style={{ listStyle: 'none', padding: 0}}>
            {favorites.length !== 0 ?
              favorites.map(hotel => (
                <li key={hotel.hotelId}>
                  {console.log(hotel)}
                  <h4>{hotel.hotelName}</h4>
                  <p>{`Price from: ${hotel.priceFrom} rub`}</p>
                  <p>{`Stars: ${hotel.stars}`}</p>
                </li>
              )) :
              <p>Nothing</p>
            }
          </ul>
        </div>
      </div>
      <Hotels
        hotels={hotels}
        favorites={favorites}
        addFavorite={addFavorite}
        delFavorite={delFavorite}
      />
    </main>
    </>
  )
}