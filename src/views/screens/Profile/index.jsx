import React, { Suspense, useEffect, useState, Fragment } from 'react';
import { useHistory, useRouteMatch } from "react-router-dom";
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import ROUTES from '../../../constants/routes'
import SenatorsController from '../../../controllers/SenatorsController'
import SenatorsList from '../../components/senatorsList'

const Profile = () => {
  const [senator, setSenator] = useState({})
  const [isLoading, setLoading] = useState(true)
  const history = useHistory()
  const match = useRouteMatch()
  
  const getSenator = async (id) => {
    const senatorsController = new SenatorsController()
    try {
      let senator = await senatorsController.getSenator(id)
      console.log("SENATOR: ", senator)
      setSenator(senator)
      setLoading(false)
    } catch (e) {console.log(e)}
  }

  useEffect(() => {
    getSenator(match.params.id)
  },[])

  return (
    <Fragment>
      <div className={style.profileWrapper}>
        { !isLoading ? 
          <Fragment>
            <h1>{TEXTS.senatorProfileTitle} {senator.first_name} {senator.last_name}</h1>
          </Fragment>
        : "loading" 
        }
      </div>
    </Fragment>
  );
}

export default Profile;
