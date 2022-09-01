import React from 'react'

const Button = ({ texto, handleClick}) => {
  return <button onClick={handleClick}>{texto}</button>;
};


export default Button