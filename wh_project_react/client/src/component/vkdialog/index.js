import React, { useState, useEffect } from 'react';
import { NavLink, Link, useSearchParams, useLocation} from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { inject, observer } from 'mobx-react';
import VK, { Auth } from 'react-vk';

import './style.css'

export default inject('books') (
  observer((props) => {
  const [open, setOpen] = useState(false);
  
  let location = useLocation();

  let [storage, setStorage] = useState(sessionStorage.auth || 'false');
  let [userInfo, setUserInfo] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };

  useEffect(()=>{
    if(searchParams.get('authorization') === 'true') {
      setOpen(true)
    }
    setStorage(sessionStorage.auth)
  },[userInfo, searchParams]);
  console.log(location.pathname);
  return (
    <div className="auth_dialog">
      <div className={storage==='true' ? "header_button_show" : "header_button_hide"}>
        <NavLink
          className="header_button_admin" 
          variant="outlined" 
          to={location.pathname === '/books'? "/admin?bookslist" : "/books?categories=allbooks&page=1"}
          onClick={()=>{
            location.pathname === '/books'? props.history.push("/admin?bookslist") : props.history.push("/books?categories=allbooks&page=1")
          }}
        >
          {
            location.pathname === "/admin" ? "Пользователь": "Администратор"
          }
        </NavLink>
      </div>
      <NavLink 
        className="auth_button"
        variant="outlined"
        to={storage === 'true' ? "/books?categories=allbooks&page=1" : ``}
        onClick={()=>{
          handleClickOpen();
          if(storage === 'true') {
            setStorage('false')
            props.history.push("/books?categories=allbooks&page=1")
            sessionStorage.setItem('userInfo', JSON.stringify({'first_name': '', 'uid': ''}))
            sessionStorage.setItem('auth', 'false');
          }
        }}
      >
        {
          storage === 'true' ? 'выйти' : 'войти'
        }
      </NavLink>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Авторизация VK"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText component={'div'} id="alert-dialog-description"> 
            <VK apiId={51418603}>
              <Auth options={{onAuth: user => {
                  if(user) {
                    setUserInfo(user);
                    setStorage('true')
                    sessionStorage.setItem('userInfo', JSON.stringify({'first_name': user.first_name, 'uid': `${user.uid}`}))
                    sessionStorage.setItem('auth', 'true');
                  }
                },
              }}/>
            </VK>
            {
              userInfo ? sessionStorage.auth === 'true' ? <div className="header_workspace">
                <Button 
                  className="header_button_workspace"
                  variant="outlined" 
                  onClick={handleClose}
                >
                  <Link 
                    className="header_button_link_workspace"
                    to={`/admin?bookslist`}
                    onClick={()=> {
                      props.history.push(`/admin?bookslist`)
                    }}
                  >
                    Мастерская
                  </Link>
                </Button>
                </div> : 
                <div className="header_workspace">Вы авторизованны</div> : 
                <div className="header_workspace">Вы не авторизованны</div>
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}))