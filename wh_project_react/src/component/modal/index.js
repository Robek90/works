import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { blue } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import './style.css';

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
  allbooks: ["примарх", "хорус луперкаль", "ересь хоруса", "лоялисты", "предатели", "космодесант", "сыны хоруса", "жилиман", "ультрамарины", "абадон", "предатели", "космодесант", "царкех"],
  wh30k: ["примарх", "хорус луперкаль", "ересь хоруса", "лоялисты", "предатели", "космодесант", "сыны хоруса"],
  wh40k: ["примарх", "жилиман", "ультрамарины", "абадон", "предатели", "космодесант", "царкех"],
};

export default function FilterModal(props) {

  let tags;

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
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let selectFiltersArr = [];

  const handleClick = (event, item) => {
    if(event.target.checked === false) {
      selectFiltersArr.splice(selectFiltersArr.indexOf(item), 1)
    } else {
      selectFiltersArr.push(item)
    }
  };
  
  const pushTags = () => {
    console.log(selectFiltersArr);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {tags.map((item,index) => (
              <div className="filter_block">
                <Checkbox 
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
          <button onClick={()=>pushTags()}/>
        </Box>
      </Modal>
    </div>
  );
}