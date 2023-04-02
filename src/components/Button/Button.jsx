import React from "react";

export default function Button({ name, selector, type, isDisabled, handleClick }) {
  return (
    <button
      className={selector}
      type={type}
      aria-label={name}
      onClick={handleClick}
      disabled={isDisabled}>
      {name}
    </button>
  )
}