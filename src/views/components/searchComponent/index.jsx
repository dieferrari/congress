import React, { useState } from 'react';
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'

const SearchComponent = ({ handleSearch, handleSelection }) => {
  const FILTERS = ["all", "name", "party", "gender"]
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('ALL')
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleBlur = (event) => {
    if (event.keyCode === 13) {
      let element = event.target
      handleSubmit()
      element.blur()
		}
  }

  const handleSubmit = () => {
    handleSearch(value)
  }

  const handleClick = (key) => {
    setFilter(key.toUpperCase())
    handleSelection(key)
  }

  return (
    <div className={style.searchWrapper}>
      <div className={style.searchbarContainer}>
        <input 
          placeholder={TEXTS[`${filter.toLowerCase()}SearchPlaceholder`]}
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
      <div className={`${style.dropdownContainer} ${openDropdown && style.open} ${filter !== 'ALL' && style.filtering}`}>
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
            <div 
              key={key}
              name={key}
              value={key}
              onClick={(e) => handleClick(key)}
            >{key.toUpperCase()}</div>
          )))}
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
