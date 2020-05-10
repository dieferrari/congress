import React, { useEffect, useState, Fragment } from 'react';
import { useHistory, useRouteMatch } from "react-router-dom";
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import SenatorsController from '../../../controllers/SenatorsController'
import maleAvatar from '../../../assets/male-senator-placeholder.svg'
import femaleAvatar from '../../../assets/female-senator-placeholder.svg'

import Loader from '../../components/loader'

const Profile = () => {
  const [senator, setSenator] = useState({})
  const [isLoading, setLoading] = useState(true)
  const history = useHistory()
  const match = useRouteMatch()
  
  const getSenator = async (id) => {
    const senatorsController = new SenatorsController()
    try {
      let senator = await senatorsController.getSenator(id)
      setSenator(senator)
      setLoading(false)
    } catch (e) {console.log(e)}
  }

  const handleBack = () => {
    history.goBack()
  }

  useEffect(() => {
    getSenator(match.params.id)
  },[match.params.id])

  return (
    <div className={style.profileWrapper}>
      <div className={style.goBackContainer} onClick={handleBack}><span/>{TEXTS.goBackLabel}</div>
      <div className={style.profileContainer}>
        { !isLoading ? 
          <Fragment>
            <div>
              <img src={senator.gender === "M" ? maleAvatar : femaleAvatar} alt="Profile avatar"/>
            </div>
            <div className={style.detailContainer}>
              <h1>{TEXTS.senatorProfileTitle} {senator.first_name} {senator.last_name}</h1>
              <div>
                <div>{TEXTS.titleLabel}:</div> <div>{senator.roles[0].title}</div>
              </div>
              <div>
                <div>{TEXTS.stateLabel}:</div> <div>{senator.roles[0].state}</div>
              </div>
              <div>
                <div>{TEXTS.websiteLabel}:</div> <a href={senator.url}>{senator.url}</a>
              </div>
              <div>
                <div>{TEXTS.contactLabel}:</div> <div>{senator.roles[0].office}<span>{senator.roles[0].phone}</span></div>
              </div>
              <div>
                <div>{TEXTS.partyLabel}:</div> <div>{senator.roles[0].party === "D" ? TEXTS.democraticLabel : TEXTS.republicanLabel}</div>
              </div>
            </div>
          </Fragment>
        : <Loader backgroundWhite={true}/>
        }
      </div>
    </div>
  );
}

export default Profile;
