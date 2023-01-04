import React from 'react';
import style from './header.module.css';
import ThemeSwitchButton from '../ThemeSwitchButton';

function Header() {
  return (
    <div className={style.header}>
        <h1 className={style.brand}><a href="/">TeknoBlog</a></h1>
        <ul className={style.links}>
            <li><a href="/" className={style.list_item}>Blog</a></li>
            <li><a href="/" className={style.list_item}>Etkinlikler</a></li>
            <li><a href="/" className={style.list_item}>Hakkımızda</a></li>
        </ul>
        <ThemeSwitchButton />
    </div>
  )
}

export default Header