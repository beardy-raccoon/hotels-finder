import './App.css';
import React from 'react';
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authorized = localStorage.getItem('authorized');

  const push = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('authorized', true);
    setIsLoggedIn(true);
  }

  const handleSignout = () => {
    localStorage.removeItem('authorized');
    setIsLoggedIn(false);
    push('/')
  }

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path='/'
            element={
              <ProtectedRoute isLoggedIn={authorized}>
                <MainScreen handleSignout={handleSignout}/>
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
