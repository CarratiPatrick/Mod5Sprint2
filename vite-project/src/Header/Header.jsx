import React from 'react'
import Menu from '../Menu/Menu'
import S from './Header.module.css'
const Header = () => {
  return (
    <div className={S.Header}>
    <Menu/>
    </div>
  )
}

export default Header