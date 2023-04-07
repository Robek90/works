import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import './style.css';

export default inject('books') (
  observer((props) => {
    const [searchValue, setSearshValue] = useState('');

    function handleClick() {
      if(searchValue) {
        props.history.push(`/books?search=${searchValue}`)
      } else {
        alert(', пожалуйста введите название книги для выполнения поиска!!!')
      }
    };

    return (
      <div className="header_input">
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Искать по названию, автору, году книги"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={searchValue}
            onChange={(evt) => setSearshValue(evt.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Link to={`/books?search=${searchValue}&page=1`}>
            <IconButton 
              type="button" 
              sx={{ p: '10px' }} 
              aria-label="search"
              onClick={() => {
                handleClick();
              }}
            >
              <SearchIcon/>
            </IconButton>
          </Link>
        </Paper>
      </div>
    );
  })
)