import './Header.css';
import React from "react";

export default function Header({ handleSignout }) {
  return (
    <div className="header">
      <h1>Simple Hotel Check</h1>
      <button onClick={handleSignout}>Signout</button>
    </div>
  )
}