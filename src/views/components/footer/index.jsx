import React from 'react';
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'

const Footer = () => {

    return (
      <div className={style.footerContainer}>
        <div>{TEXTS.footerCopyright}</div>
      </div>
    );
}

export default Footer;
