import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { getVerification } from '../../services/verification';
import VK, { Auth } from 'react-vk';

export default function VKDialog(props) {
  const [open, setOpen] = useState(false);

  let [storage, setStorage] = useState(false);
  let [userInfo, setUserInfo] = useState();
  let [userVerification, setUserVerification] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    if(userInfo) {
      getVerification(userInfo)
        .then(res=>setUserVerification(res))
        .catch(err=>console.log(err))
    }
  },[userInfo]);

  return (
    <div>
      <Button variant="outlined" onClick={()=>{
        handleClickOpen();
        if(storage) {
          window.location.reload();
        };
      }}>
        {
          storage ? 'выйти' : 'войти'
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
                    console.log(user);
                    if(user) {
                      setUserInfo(user)
                      setStorage(true)
                    }
                  },
                }}/>
              </VK>
            {
             userInfo ? userVerification ? <div>
              <Button variant="outlined" onClick={handleClose}>
                <Link 
                  to={`/admin?categories=bookslist`}
                  onClick={()=> {
                    props.history.push(`/admin?categories=bookslist`)
                  }}
                >
                  Мастерская шестеренки
                </Link>
              </Button>
              </div> : <div>Вы авторизованы</div> : <></>
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}