import React, { useState, useRef } from 'react';

import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import { red } from '@mui/material/colors';

export default function FormInputs(props) {

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

  const whCategories = props.bookData[1].categories[1]

  return (
    <Box component="form" ref={props.form} encType="multipart/form-data" onChange={event=>event.preventDefault()}>
      <FormLabel>Категория 30к или 40к</FormLabel>
      <RadioGroup
        row={true}
        defaultValue={whCategories === "wh30k" ? "wh40k" : "wh30k"}
      >
        {['wh30k','wh40k'].map((categories,index)=>{
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
                  onChange={() =>{props.setCheckboxvValue((newObj) => [...newObj, race])}}         
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
      {textFiledsArray.map((label,index)=> {
        if(Object.keys(label) !== "categories" || "race" || "img") {
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
      })}
      <>
        <div className="input-group">
          <FormControlLabel 
            htmlFor="files"
            control={
              <Input id="files" type="file"/>
            }/>
        </div>
        <FormHelperText>Добавить обложку книги</FormHelperText>
      </>
    </Box>
  )
}