import React, { Suspense, useEffect, useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import ROUTES from '../../../constants/routes'
import SenatorsController from '../../../controllers/SenatorsController'
import SenatorsList from '../../components/senatorsList'

const Homepage = () => {
  const [listData, setData] = useState([])
  const [selectedPage, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const history = useHistory()
  

  const getSenators = async () => {
    const senatorsController = new SenatorsController()
    try {
      let senators = await senatorsController.getAllSenators()
      console.log("MEMBERS: ", senators)
      setData(senators)
      setTotalPages(senators.length)
      setLoading(false)
    } catch (e) {console.log(e)}
  }

  useEffect(() => {
    getSenators()
  },[])

  const handleSenatorSelection = (id) => {
    history.push(`${ROUTES.profile}/${id}`)
  }

  return (
    <Fragment>
      <div className={style.homeWrapper}>
        <h1>{TEXTS.membersListTitle}</h1>
        { !isLoading ? 
          <SenatorsList 
            senators={listData[selectedPage]}
            handleSelection={handleSenatorSelection}
          /> 
        : "loading" 
        }
      </div>
    </Fragment>
  );
}

export default Homepage;
