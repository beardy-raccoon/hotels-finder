import './MainScreen.css'
import React from 'react';
import Header from '../Header/Header';
import HotelsWidget from '../Hotels/HotelsWidget';
import FavoritesWidget from '../Favorites/FavoritesWidget';
import SearchWidget from '../SearchWidget/SearchWidget';

export default function MainScreen({ handleSignout }) {
  return (
    <>
      <Header handleSignout={handleSignout} />
      <main className="content">
        <div className="side-container">
          <SearchWidget />
          <FavoritesWidget isFavorites={true} />
        </div>
        <HotelsWidget
          isFavorites={false}
        />
      </main>
    </>
  );
}