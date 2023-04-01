import './App.css';
import React from 'react';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainScreen from '../Test';
import LoginScreen from '../LoginScreen/LoginScreen';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authorized = localStorage.getItem('authorized');

  const handleLogin = () => {
    localStorage.setItem('authorized', true);
    setIsLoggedIn(true)
  }

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path='/'
            element={
              <ProtectedRoute isLoggedIn={authorized}>
                <MainScreen />
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
