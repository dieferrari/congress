import React from 'react';
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'

const SenatorList = ({ senators = [], handleSelection }) => {
  const handleClick = (id) => handleSelection(id)
  return (
    <ul>
    {senators.length > 0 ? senators.map(senator => (
      <li 
        key={senator.id}
        className={style.senatorItem} 
        onClick={() => handleClick(senator.id)}
        >
        {senator.first_name} {senator.last_name}
        <span>{senator.title}</span>
      </li>
    )):
      <div className={style.emptyText}>{TEXTS.resultsEmptyLabel}</div>
    }
    </ul>
    
  );
}

export default SenatorList;