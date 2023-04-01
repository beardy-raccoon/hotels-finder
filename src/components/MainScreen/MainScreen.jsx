import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import { addFavoriteAction, delFavoriteAction } from '../../store/favoriteHotelsReducer';
import Hotels from '../Hotels/Hotels';


export default function MainScreen({ handleSignout }) {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const hotels = useSelector(state => state.hotels.hotels);

  const addFavorite = (hotel) => {
    console.log(hotel)
    dispatch(addFavoriteAction(hotel))
  }

  const delFavorite = (hotelId) => {
    console.log(hotelId)
    delFavoriteAction(hotelId)
  }

  return (
    <>
    <Header handleSignout={handleSignout}/>
    <main className="login" style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '70px' }}>
      <Hotels
        hotels={hotels}
        favorites={favorites}
        addFavorite={addFavorite}
        delFavorite={delFavorite}
      />
      <div className="side-container">
        <form action="#" className="search-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>
          <input type="text" id="city" />
          <input type="date" id="chekin-date" />
          <input type="text" id="duration" />
        </form>
        <div className="favorites" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginTop: '100px' }}>
          <h3>Favorites</h3>
          <p>Here'll be filters</p>
          {console.log('fav', favorites)}
          <ol>
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
          </ol>
        </div>
      </div>
    </main>
    </>
  )
}