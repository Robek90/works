import React, { useState, useRef } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from "react-router-dom";
import FormInputs from './forminputs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import './style.css';

export default inject('books') (
  observer((props) => {

  const [open, setOpen] = useState(false);
  const [bookData, setBookData] = useState("")

  const form = useRef(null)
  
  const handleClickOpen = () => {
    if(props.bookAdd !== null) {
      setBookData([props.bookId, props.bookValue])
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    if(props.title === "редактировать") {
      props.books.sendEditBookData(form.current, props.bookIndex+1);
    } else {
      props.books.sendNewBookData(form.current);
    }
    handleClose();
  };
  
  return (
    <div className={props.className}>
      <Button 
        className={props.className+"_button"}
        variant={props.variant} 
        onClick={handleClickOpen}
      >
        {props.title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Вводите данные информацию о книге через запятую.
          </DialogContentText>
        <FormInputs 
          bookItem={props.bookItem}
          bookData={bookData}
          form={form}
        />
        </DialogContent>
        <DialogActions>
          <Button 
            className="admin_dialog_button_cancel"
            onClick={handleClose}
          >
            Отмена
          </Button>
          <NavLink 
            className="admin_dialog_link_send"
            to={`/admin?bookslist=${props.title==="редактировать" ? props.booksList.length : props.booksList.length+1}`}
            onClick={(()=>{
              handleSend();
              props.history.push(`/admin?bookslist=${props.title==="редактировать" ? props.booksList.length : props.booksList.length+1}`);
            })}
          >
            Отправить  
          </NavLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}))