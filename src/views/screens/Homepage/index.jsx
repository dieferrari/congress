import React, { useEffect, useState } from 'react';
import style from './style.module.scss'
import TEXTS from '../../../constants/texts'
import MembersController from '../../../controllers/MembersController'

const Homepage = () => {
  const [listData, setData] = useState([])

  const getMembers = async () => {
    const membersController = new MembersController()
    try {
      let members = await membersController.getAllMembers()

    } catch (e) {console.log(e)}
  }

  useEffect(() => {
    getMembers()
  },[])

  return (
    <div className={style.homeWrapper}>
      <h1>{TEXTS.membersListTitle}</h1>
    </div>
  );
}

export default Homepage;
