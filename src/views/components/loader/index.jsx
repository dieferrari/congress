import React from 'react';
import style from './style.module.scss'

const Loader = ({ backgroundWhite = false }) => {
  return (
    <div className={style.spinnerBox}>
      <div className={style.circleBorder}>
        <div className={`${style.circleCore} ${backgroundWhite && style.white}`}></div>
      </div>  
    </div>
  );
}

export default Loader;