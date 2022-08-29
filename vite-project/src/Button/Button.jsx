import React from 'react'

const Button = ({texto,click,css}) => {
  return (
    <button onClick={click} className={css}> {texto} </button>
  )
}

export default Button