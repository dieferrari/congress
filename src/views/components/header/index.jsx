import React from 'react';
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'

const Header = () => {

    return (
      <div className={style.headerContainer}>
        <div className={style.flag} />
        <div className={style.headerTitle}>{TEXTS.headerTitle}</div>
      </div>
    );
}

export default Header;
