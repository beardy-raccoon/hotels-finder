import React from "react";

export default function Button({ name, selector, handleClick }) {
  return (
    <button className={selector} onClick={handleClick}>{name}</button>
  )
}