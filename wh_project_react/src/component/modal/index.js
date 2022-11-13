import React, { useState } from 'react';
import { Link  } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { blue } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import './style.css';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const tagsList = {
  allbooks: ["примарх", "хорус луперкаль", "ересь хоруса", "лоялисты", "предатели", "космодесант", "сыны хоруса", "жилиман", "ультрамарины", "абадон", "космодесант", "царкех"],
  wh30k: ["примарх", "хорус луперкаль", "ересь хоруса", "лоялисты", "предатели", "космодесант", "сыны хоруса"],
  wh40k: ["примарх", "жилиман", "ультрамарины", "абадон", "предатели", "космодесант", "царех"],
};

export default function FilterModal(props) {
  let tags;
  
  const [open, setOpen] = useState(false);
  const [selectFiltersArr, setSelectFiltersArr] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  switch (props.category) {
    case "allbooks":
      tags = tagsList.allbooks;
      break;
    case "wh30k":
      tags = tagsList.wh30k;
      break;
    case "wh40k":
      tags = tagsList.wh40k;
      break;
    default:
      break;
  };

  useEffect(() => {
    setSelectFiltersArr([])
  },[props.category, props.race]);

  const handleClick = (event, item) => {
    if(event.target.checked === false) {
      setSelectFiltersArr(selectFiltersArr.filter(i => i !== item))
    } else {
      setSelectFiltersArr(selectFiltersArr => [...selectFiltersArr, item])
    }
  };

  let path;

  if(selectFiltersArr.length !== 0) {
    if(props.race === null) {
      path = `?category=${props.category}&tag=${selectFiltersArr}`
    } else {
      path = `?category=${props.category}&race=${props.race}&tag=${selectFiltersArr}`
    };
  } else {
    if(props.race === null) {
      path = `?category=${props.category}`
    } else {
      path = `?category=${props.category}&race=${props.race}`
    };
  };
  
  function handleChange(item) {
    let checked;
    if(props.tag === null) {
      checked = false
    } else {
      props.splitUrl(props.tag).forEach(elem => {
        if(elem === item) {
          checked = true
        }
      })
    }
    return checked
  };

  return (
    <div>
      <Button onClick={handleOpen}>Фильтрация</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Фильтрация по тегам
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {tags.map((item,index) => (
              <div className="filter_block">
                <Checkbox 
                  defaultChecked={handleChange(item)}
                  className="filter_checkbox"
                  onClick={(event) => handleClick(event, item)}
                  key={index}          
                  sx={{
                    color: blue[800],
                    '&.Mui-checked': {
                      color: blue[600],
                    },
                  }}
                />
                <div className="filter_title">{item}</div> 
              </div>
            ))} 
          </Typography>
          <Link
            to={`/books${path}&page=1`}
            onClick={()=> {
              handleClose();
              props.history.push(`/books${path}&page=1`);
            }}
          >
            отправить
          </Link>
        </Box>
      </Modal>
    </div>
  );
}