import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
        <NavLink to="/" className={style.item} >Registration</NavLink>
        <NavLink to="/employee" className={style.item} >Employee</NavLink>
    </div>
  )
}

export default Header