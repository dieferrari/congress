import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import ROUTES from '../../../constants/routes'
import TEXTS from '../../../constants/texts'

const SearchComponent = ({ handleFilter }) => {
  const history = useHistory()
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('ALL')
  const [openDropdown, setOpenDropdown] = useState(false)
  const FILTERS = ["all", "first name", "last name", "party", "gender"]

  const handleBlur = (event) => {
    if (event.keyCode === 13) {
      let element = event.target
      handleSubmit()
      element.blur()
		}
  }

  const handleSubmit = () => {
    value && handleFilter(value)
  }

  return (
    <div className={style.searchWrapper}>
      <div className={style.searchbarContainer}>
        <input 
          placeholder={TEXTS.searchBarPlaceholder}
          type="text"
          name="searchBar"
          onChange={(e) => setValue(e.target.value)}
          autoComplete='justdont'
          onKeyDown={(e) => handleBlur(e)}
        />
        <div className={style.iconContainer} onClick={() => handleSubmit()}>
          <div />
        </div>
      </div>
      <div className={`${style.dropdownContainer} ${openDropdown && style.open}`}>
        <input
          type="text"
          name="filterDropdown"
          value={filter}
          readOnly
          onBlur={() => setTimeout(() => setOpenDropdown(false), 150)}
          onFocus={() => setOpenDropdown(true)}
        />
        <div className={style.iconContainer} onClick={() => handleSubmit()}>
          <div/>
        </div>
        <div className={`${style.optionsContainer} ${openDropdown && style.open}`}>
            {FILTERS.map((key => (
            <div key={key}>{key.toUpperCase()}</div>
          )))}
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
