import React, { Suspense, useEffect, useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import ROUTES from '../../../constants/routes'
import SenatorsController from '../../../controllers/SenatorsController'
import SenatorsList from '../../components/senatorsList'
import SearchComponent from '../../components/searchComponent'
import { paginateItems } from '../../../utils/index'

const Homepage = () => {
  const [data, setData] = useState([])
  const [paginatedData, setPaginatedData] = useState([])
  const [selectedPage, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const [filterBy, setFilterBy] = useState('all')
  const history = useHistory()
  

  const getSenators = async () => {
    const senatorsController = new SenatorsController()
    try {
      let senators = await senatorsController.getAllSenators()
      let paginatedSenators = paginateItems([...senators], 10)
      setData(senators)
      setPaginatedData(paginatedSenators)
      setTotalPages(paginatedSenators.length)
      setLoading(false)
    } catch (e) {console.log(e)}
  }

  useEffect(() => {
    getSenators()
  },[])

  const handleSenatorSelection = (id) => {
    history.push(`${ROUTES.profile}/${id}`)
  }

  const handleFilter = (value) => {
    let filtered = data.filter(senator => {
      if (filterBy === 'all') {
        return Object.keys(senator).some(key => {
          if (senator[key]) return (String(senator[key]).toLowerCase()).includes(value.toLowerCase())
          else return false
        })
      }
    })
    if (filtered.length > 0) setPaginatedData(paginateItems([...filtered], 10))
    else setPaginatedData([[]])
  }

  return (
    <Fragment>
      <div className={style.homeWrapper}>
        <SearchComponent 
          handleFilter={handleFilter}
        />
        <div className={style.listWrapper}>
          <h1>{TEXTS.senatorsListTitle}</h1>
            { !isLoading ? 
              <SenatorsList 
                senators={paginatedData[selectedPage-1]}
                handleSelection={handleSenatorSelection}
              /> 
            : "loading" 
            }
        </div>
      </div>
    </Fragment>
  );
}

export default Homepage;
