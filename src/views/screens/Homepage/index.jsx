import React, { useEffect, useState } from 'react';
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import SenatorsController from '../../../controllers/SenatorsController'

const Homepage = () => {
  const [listData, setData] = useState([])

  const getSenators = async () => {
    const senatorsController = new SenatorsController()
    try {
      let senators = await senatorsController.getAllSenators()
      console.log("MEMBERS: ", senators)
    } catch (e) {console.log(e)}
  }

  useEffect(() => {
    getSenators()
  },[])

  return (
    <div className={style.homeWrapper}>
      <h1>{TEXTS.membersListTitle}</h1>
    </div>
  );
}

export default Homepage;
