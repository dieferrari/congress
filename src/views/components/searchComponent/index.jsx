import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import ROUTES from '../../../constants/routes'
import TEXTS from '../../../constants/texts'

const SearchComponent = () => {
  const history = useHistory()
  const [value, setValue] = useState('')

  const handleClick = () => {
    history.push(ROUTES.homepage)
  }

  const handleBlur = (event) => {
    if (event.keyCode === 13) {
      let element = event.target
      handleSubmit()
      element.blur()
		}
  }

  const handleSubmit = () => {
    console.log("SUBMIT SEARCH")
  }

    return (
      <div className={style.searchWrapper}>
        <input 
          placeholder={TEXTS.searchBarPlaceholder}
          type="text"
          name="searchBar"
          onChange={(e) => setValue(e.target.value)}
          autoComplete='justdont'
          onKeyDown={(e) => handleBlur(e)}
        ></input>
        <div className={style.iconContainer}>
          <div />
        </div>
      </div>
    );
}

export default SearchComponent;
