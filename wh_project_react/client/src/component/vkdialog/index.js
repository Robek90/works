import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
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

  let [storage, setStorage] = useState(sessionStorage.auth || 'false');
  let [userInfo, setUserInfo] = useState(null);
  console.log(typeof(storage),storage);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };

  useEffect(()=>{
    if(userInfo === null) {
      sessionStorage.setItem('auth', 'false')
      sessionStorage.setItem('userInfo', JSON.stringify({'first_name': '', 'uid': ''}))
    } else {
      sessionStorage.setItem('userInfo', JSON.stringify({'first_name': userInfo.first_name, 'uid': `${userInfo.uid}`}))
    }
    
    if(searchParams.get('authorization')==='true') {
      setOpen(true)
    }
  },[userInfo, searchParams]);

  return (
    <div
      className="auth_dialog">
      <Button 
        className="auth_button"
        variant="outlined" 
        onClick={()=>{
          handleClickOpen();
          if(storage === 'true') {
            window.location.reload();
          };
        }}
      >
        {
          storage === 'true' ? 'выйти' : 'войти'
        }
      </Button>
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
                      sessionStorage.setItem('auth', 'true');
                    }
                  },
                }}/>
              </VK>
            {
            userInfo ? sessionStorage.auth === 'true' ? <div>
              <Button variant="outlined" onClick={handleClose}>
                <Link 
                  to={`/admin?bookslist`}
                  onClick={()=> {
                    props.history.push(`/admin?bookslist`)
                  }}
                >
                  Мастерская шестеренки
                </Link>
              </Button>
              </div> : <div>Вы авторизованны</div> : <div>Вы не авторизованны</div>
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}))