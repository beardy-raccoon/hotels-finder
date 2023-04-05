import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFavoritesAction } from '../../store/favoriteHotelsReducer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MainScreen from '../MainScreen/MainScreen';
import LoginScreen from '../LoginScreen/LoginScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authorized = localStorage.getItem('authorized');
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  // Обычно в таком хендлере идет запрос на сервер с данными авторизации и
  // если все ок в ответ приходит токен, который записывается в localStorage,
  // но в данном случае просто запишем туда, что мы аторизированы.

  const handleLogin = () => {
    localStorage.setItem('authorized', true);
    setIsLoggedIn(true);
  }

  const handleSignout = () => {
    // Очищаем store при выходе из аккаунта, чтобы при повторном входе
    // без перезагрузке страницы не подтягивались данные из стора
    dispatch(setFavoritesAction([]));
    localStorage.removeItem('authorized');
    localStorage.removeItem('storedFavorites');
    setIsLoggedIn(false);
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('storedFavorites'));
    if (storedData) {
      dispatch(setFavoritesAction(storedData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Логично, что при перезагрузке страницы избранное не должно сбрасываться,
  // обычно такие данные хранят на сервере вместе с соответствующим аккаунтом,
  // Но в данном случае можно сохранить данные в локальном хранилище.

  // Сохраняем данные из избранного в localStorage при изменении favorites
  // исключаем случай когда массив избранного пустой, чтобы localStorage
  // не затирало при перезагрузке страницы.
  // Ручное удаление последнего элемента предусмотрено в хендлере delFavorite
  // HotelsList.jsx:21

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
