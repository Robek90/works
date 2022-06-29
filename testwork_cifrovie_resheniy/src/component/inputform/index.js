import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { inject, observer } from 'mobx-react';

import useStyles from './muistyle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default inject('posts')(
  observer((props) => {
  const classes = useStyles();

  const [data, setData] = useState('');
  const [ error, setError ] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (name) => (event) => {
    setData((newObj) => ({ ...newObj, [name]: event.target.value }));
  };

  const handleSubmmit = (e) => {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        body: data.body,
        postId:props.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((comment) => props.posts.setComms([
        ...props.posts.comms,
        {
          ...comment
        }
      ]),
      (error) => {
        setError(error);
      }
      )
  };

  const handlErrorTest = (e) => {
    e.preventDefault();
    setError(true);
  };

  return error ? (
    alert('Ошибка отправки данных'),
    <Redirect to='/'/>
    ) : (
    <div>
      <button 
        className={classes.openModalBtn}
        onClick={handleOpen}
      >
        Добавить коментарий
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6">
              <p>Имя</p>
              <input
                className={classes.input}
                placeholder="Ivan"
                name={'name'}
                type="text"
                onChange={handleChange('name')}
              />
            </Typography>
            <Typography id="transition-modal-title" variant="h6">
              <p>Email</p>
              <input 
                className={classes.input}
                placeholder="Example@gmail.com"
                type="email"
                name={'email'}
                onChange={handleChange('email')}
              />
            </Typography>
            <Typography id="transition-modal-title" variant="h6">
              <p>Комментарий</p>
              <textarea 
                className={classes.textarea}
                placeholder="Текст комментария"
                type="text"
                name={'body'}
                onChange={handleChange('body')}
              />
            </Typography>
            <Typography id="transition-modal-title" variant="h6">
              <button 
                className={classes.pushComment}
                onClick={(e)=> {
                  handleSubmmit(e);
                  handleClose();
                }}
              >
                Отправить
              </button>
              <button 
                className={classes.pushAlertComment}
                onClick={(e)=> {
                  handlErrorTest(e);
                }}
              >
                Тест ошибки
              </button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}))