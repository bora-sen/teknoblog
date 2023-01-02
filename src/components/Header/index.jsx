import React from 'react';
import style from '../../component_styles/header.module.css';

function Header() {
  return (
    <div className={style.header}>
        <h1 className={style.brand}>Tekno<span className={style.brand_second}>Blog</span></h1>
        <ul className={style.links}>
            <li><a href="/" className={style.list_item}>Blog</a></li>
            <li><a href="/" className={style.list_item}>Etkinlikler</a></li>
            <li><a href="/" className={style.list_item}>Hakkımızda</a></li>
        </ul>
    </div>
  )
}

export default Header