import React from "react";

export default function Header({ handleSignout }) {
  return (
    <div className="header">
      <button onClick={handleSignout}>Signout</button>
    </div>
  )
}