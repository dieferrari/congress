import React from 'react';
import style from './style.module.scss'

const Paginator = ({ pages, selectedPage, handleSelection }) => {

  const handleClick = (page) => {
    handleSelection(page)
  }

  return (
    <div className={style.paginatorContainer}>
      {Array(pages).fill("1").map((page, ix) => (
        <div 
          className={selectedPage === ix+1 && style.selected}
          onClick={() => handleClick(ix+1)}
        >{ix+1}</div>
      ))}
    </div>
  );
}

export default Paginator;