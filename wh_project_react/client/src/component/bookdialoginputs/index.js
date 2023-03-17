import React, { useState, useRef } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import FormInputs from './forminputs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import './style.css';

export default inject('books') (
  observer((props) => {
  const [ open, setOpen ] = useState(false);
  const [ checkboxValue, setCheckboxvValue ] = useState([]);
  const [ bookData, setBookData ] = useState("")

  const form = useRef(null)

  const handleClickOpen = () => {
    if(props.bookAdd !== null) {
      setBookData([props.bookId, props.bookValue])
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setLoading("add"+ props.booksList.length+1);
  };

  const handleSend = (event) => {
    props.books.sendNewImageData(form.current, checkboxValue.join(','), event);
    handleClose();
  };

  return (
    <div>
      <Button variant={props.variant} 
        onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Вводите данные информацию о книге через запятую.
          </DialogContentText>
        <FormInputs 
          bookData={bookData}
          setCheckboxvValue={setCheckboxvValue}
          form={form}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button> 
            <Link 
              to={`/admin?bookslist=${props.booksList.length+1}`}
              onClick={((event)=>{
                handleSend(event);
                props.history.push(`/admin?bookslist=${props.booksList.length+1}`);
              })}>
              Отправить
            </Link>   
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}))