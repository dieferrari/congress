import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import ROUTES from '../../../constants/routes'
import SenatorsController from '../../../controllers/SenatorsController'
import SenatorsList from '../../components/senatorsList'
import SearchComponent from '../../components/searchComponent'
import { paginateItems } from '../../../utils/index'
import Loader from '../../components/loader'
import Paginator from '../../components/paginator'

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
      let paginatedSenators = paginateItems([...senators], 12)
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

  const handleSearch = (value) => {
    let filtered = data.filter(senator => {
      if (filterBy.toLowerCase() === 'all' || !value) {
        return Object.keys(senator).some(key => {
          if (senator[key]) return (String(senator[key]).toLowerCase()).includes(value.toLowerCase())
          else return false
        })
      }
      else if (filterBy.toLowerCase() === 'name' && senator.first_name && senator.last_name) return (senator.first_name.toLowerCase().includes(value.toLowerCase()) || senator.last_name.toLowerCase().includes(value.toLowerCase()))
      else if (filterBy.toLowerCase() === 'party' && senator.party) return senator.party.toLowerCase() === value[0].toLowerCase()
      else if (filterBy.toLowerCase() === 'gender' && senator.gender) return senator.gender.toLowerCase() === value[0].toLowerCase()
      else return false
    })
    if (filtered.length > 0) {
      let paginated = paginateItems([...filtered], 12)
      setPaginatedData(paginateItems([...filtered], 12))
      setTotalPages(paginated.length)
    }
    else {
      setPaginatedData([[]])
      setTotalPages(1)
    }
  }

  const handleSelection = (key) => {
    setFilterBy(key)
  }

  const handlePageSelection = (page) => {
    setPage(page)
  }

  return (
    <Fragment>
      <div className={style.homeWrapper}>
        <SearchComponent 
          handleSearch={handleSearch}
          handleSelection={handleSelection}
        />
        <div className={style.listWrapper}>
          <h1>{TEXTS.senatorsListTitle}</h1>
            { !isLoading ? 
              <SenatorsList 
                senators={paginatedData[selectedPage-1]}
                handleSelection={handleSenatorSelection}
              /> 
            : <Loader/>
            }
        </div>
        {totalPages > 1 &&
          <Paginator 
            pages={totalPages}
            selectedPage={selectedPage}
            handleSelection={handlePageSelection}
          />
        }
      </div>
    </Fragment>
  );
}

export default Homepage;
