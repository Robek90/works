import React, { useState, useMemo } from 'react';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Inputs from './inputs/index';

import { red } from '@mui/material/colors';

export default function FormInputs(props) {
  const races = ['tau', 'eldar', 'imperium', 'chaos', 'necrons', 'dark eldar', 'tyranids'];
  
  const [ radioDefaultValue, setRadioDefaultValue ] = useState(null);
  const [ isChecked, setIsChecked ] = useState(new Array(races.length).fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position? !item : item
    );
    setIsChecked(updatedCheckedState);
  };

  const setCheckboxValue = (races, bookraces) => {
    let arrIndex = races.map(race=>{
      return bookraces.filter((item)=> item === race).length >= 1 ? true : false
    });
    setIsChecked(arrIndex);
  };
  
  useMemo(()=>{
    if(props.bookItem) {
      setRadioDefaultValue(props.bookItem.categories[1]);
      setCheckboxValue(races, props.bookItem.race);
    }
  },[]);

  return (
    <Box component="form" ref={props.form} encType="multipart/form-data">
      <FormLabel>Категория 30к или 40к</FormLabel>
      <RadioGroup
        className="input_admin_radio_dialog_group"
        row={true}
        defaultValue={radioDefaultValue}
      >
        {[' wh30k',' wh40k'].map((categories,index)=>{
          return(
            <FormControlLabel key={index} id="form-categories" value={categories} control={
              <Radio 
                key={index} 
                id="categories" 
                value={categories}
                sx={{
                  color: red[400],
                  '&.Mui-checked': {
                    color: red[900],
                  },
                }}
              />} 
            label={categories} />
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
                  name={race}
                  checked={isChecked[index]}
                  defaultValue={race}
                  onChange={() => handleOnChange(index)}         
                  sx={{
                    color: red[400],
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
      <Inputs 
        bookItem={props.bookItem}
      />
    </Box>
  )
}