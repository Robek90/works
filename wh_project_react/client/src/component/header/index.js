import React, { useState, useEffect } from 'react';
import InputSearch from '../inputSearch/index';
import Vkdialog from '../vkdialog/index';
import TitleLogo from '../../assets/logo/KK_logo.gif';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header(props) {
  let [adminAuth, setAdminAuth] = useState(sessionStorage.auth)

  useEffect(()=>{
    setAdminAuth(sessionStorage.auth)
  },[props])
  
  return (
    <header>
      <div className="header_logo">
        <img src={TitleLogo} alt="Когитатор Коула"></img>
      </div>
      <div className="header_search">
        <InputSearch history={props.history}/>
      </div>
      <div className="header_vk">
        <div className={adminAuth==='true' ? "header_button_show" : "header_button_hide"}>
          <Button 
            className="book_delete" 
          >
            <Link
              to={`/books?categories=allbooks&page=1`}
              onClick={()=>{
                props.history.push(`/books?categories=allbooks&page=1`);
              }}
            >
              удалить
            </Link>
          </Button>
        </div>
        <Vkdialog history={props.history}/>
      </div>
    </header>
  )
}