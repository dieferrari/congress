import React, { Fragment } from 'react';
import style from './style.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => {

  return (
    <Fragment>
      <Header />
        <div className={style.contentWrapper}>
          {children}
        </div>
      <Footer/>
    </Fragment>
  );
}

export default Layout;
