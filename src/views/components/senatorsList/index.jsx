import React, { Fragment } from 'react';
import style from './style.module.scss'

const SenatorList = ({ senators, handleSelection }) => {
  const handleClick = (id) => handleSelection(id)
  return (
    <ul>
    {senators.map(senator => (
      <li 
        key={senator.id}
        className={style.senatorItem} 
        onClick={() => handleClick(senator.id)}
        >
        {senator.first_name} {senator.last_name}
        <span>{senator.title}</span>
      </li>
    ))}
    </ul>
    
  );
}

export default SenatorList;