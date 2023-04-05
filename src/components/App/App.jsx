import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFavoritesAction } from '../../store/favoriteHotelsReducer';
import { fetchHotelsAction } from '../../store/hotelsReducer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainScreen from '../MainScreen/MainScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import getCheckoutDate from '../../utils/getCheckoutDate';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authorized = localStorage.getItem('authorized');
  const query = useSelector(state => state.query.query);
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleLogin = () => {
    localStorage.setItem('authorized', true);
    setIsLoggedIn(true);
  }

  const handleSignout = () => {
    dispatch(setFavoritesAction([]));
    localStorage.removeItem('authorized');
    localStorage.removeItem('storedFavorites');
    setIsLoggedIn(false);
  }

  const firstFetch = () => dispatch(fetchHotelsAction({ city: query.city, checkinDate: query.checkinDate, checkoutDate: getCheckoutDate(query.checkinDate, query.duration) }))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => firstFetch, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('storedFavorites'));
    if (storedData) {
      dispatch(setFavoritesAction(storedData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!favorites.length) {
      return;
    } else {
      localStorage.setItem('storedFavorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path='/'
            element={
              <ProtectedRoute isLoggedIn={authorized}>
                <MainScreen handleSignout={handleSignout} />
              </ProtectedRoute>
            }
          />
          <Route path='/sign-in' element={
            !isLoggedIn ?
              <LoginScreen handleLogin={handleLogin} /> : <Navigate to='/' />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
