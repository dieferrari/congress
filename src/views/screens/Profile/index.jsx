import React, { Suspense, useEffect, useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import ROUTES from '../../../constants/routes'
import SenatorsController from '../../../controllers/SenatorsController'
import SenatorsList from '../../components/senatorsList'

const Profile = () => {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const history = useHistory()
  

  const getSenator = async () => {
    const senatorsController = new SenatorsController()
    try {
      let senator = await senatorsController.getSenator()
      console.log("SENATOR: ", senator)
      setData(senator)
      setLoading(false)
    } catch (e) {console.log(e)}
  }

  useEffect(() => {
    getSenator()
  },[])

  return (
    <Fragment>
      <div className={style.homeWrapper}>
        <h1>{TEXTS.membersListTitle}</h1>
        { !isLoading ? 
          "PROFILE"
        : "loading" 
        }
      </div>
    </Fragment>
  );
}

export default Profile;
