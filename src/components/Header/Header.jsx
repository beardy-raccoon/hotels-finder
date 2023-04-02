import './Header.css';
import React from "react";

export default function Header({ handleSignout }) {
  return (
    <div className="header">
      <h1 className="header__title" >Simple Hotel Check</h1>
      <button className="button header__button" aria-label="Выйти" onClick={handleSignout}>Выйти</button>
    </div>
  )
}