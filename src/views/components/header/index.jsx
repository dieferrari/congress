import React from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import ROUTES from '../../../constants/routes'
import TEXTS from '../../../constants/texts'

const Header = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(ROUTES.homepage)
  }

    return (
      <div className={style.headerContainer}>
        <div onClick={() => handleClick()} className={style.logoContainer}>
          <div/>
          <div>{TEXTS.headerTitle}</div>
        </div>
      </div>
    );
}

export default Header;
