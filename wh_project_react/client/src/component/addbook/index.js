import React, { useState, useRef } from 'react';
import { inject, observer } from 'mobx-react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import { red } from '@mui/material/colors';

import './style.css';

export default inject('books') (
  observer((props) => {
  const [open, setOpen] = useState(false);

  const [checkboxValue, setCheckboxvValue] = useState([]);

  const form = useRef(null)

  const textFiledsArray = [
    {id: "Номер isbn"},
    {title: "Название книги"},
    {author: "Автор"},
    {dateRealeased: "Дата релиза"},
    {dateContext: "Миллениум событий книги"},
    {tags: "Тэги"},
    {description: "Описание книги"}
  ];

  const races = ['tau', 'eldar', 'imperium', 'chaos', 'necrons', 'dark eldar', 'tyranids'];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    // if(form.current.categories.value === '') {
    //   alert(`Выберите Категорию`)
    //   if(form.current.race.value === '') {
    //     alert(`Выберите Рассы`)
    //     if(form.current.img.value === '') {
    //       alert(`Добавте обложку для книги`)
    //       textFiledsArray.forEach((item) => {
    //         let key = Object.keys(item).join('')
    //         let value = Object.values(item).join('')

    //         if(form.current[key][value] === undefined) {
    //           alert(`Заполните поле ${Object.values(item).join('')}`)
    //         } else {
    //           props.books.sendNewImageData(form.current, checkboxValue.join(','))
    //           handleClose();
    //         }
    //       })
    //     }
    //   }
    // }
    props.books.sendNewImageData(form.current, checkboxValue.join(','))
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вводите данные информацию о книге через запятую.
          </DialogContentText>
          <Box component="form" ref={form} encType="multipart/form-data">
              <FormLabel>Категория 30к или 40к</FormLabel>
              <RadioGroup
                row={true}
                defaultValue="null"
              >
                {['WH30k','WH40k'].map((categories,index)=>{
                  return(
                    <FormControlLabel key={index} id="form-categories" value={categories} control={<Radio key={index} id="categories" value={categories}/>} label={categories} />
                  )
                })}
              </RadioGroup>
              <div
                className="addBooks_checkbox_container"
              >
                {races.map((race, index) => {
                  return(
                    <FormControlLabel
                      id="form-race"
                      key={index}
                      className="addBooks_checkbox"
                      control={
                        <Checkbox 
                        id="race"
                        value={race}
                        onChange={() =>{setCheckboxvValue((newObj) => [...newObj, race])}}         
                        sx={{
                          color: red[900],
                          '&.Mui-checked': {
                            color: red[900],
                          },
                        }}
                      />
                      }
                      label={race}
                      labelPlacement="end"
                    />
                  )
                })}
              </div>
              {textFiledsArray.map((label,index)=>{
                return(
                  <div key={index}>
                    <TextField 
                      autoFocus
                      margin="dense"
                      id={`${Object.keys(label)}`}
                      type={`${Object.keys(label)}`=== "dateRealeased" ? "number":"text"}
                      fullWidth
                      variant="standard"
                    />
                    <FormHelperText>{Object.values(label)}</FormHelperText>
                  </div>
                )
              }
              )}
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id={'img'}
                  type="file"
                  variant="standard"
                  accept="image/*"
                />
                <FormHelperText>Добавить обложку книги</FormHelperText>
              </>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={(()=>handleSend())}>
              Отправить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}))