import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { Input } from '@mui/material';

export default function Inputs(props) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const inputStyle = {
    '&.Mui-focused': {
      '&::after': {
        borderBottom: "none",
      }
    },
  };

  return(
    <div>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : props.bookItem.id}
        id={"id"}
        type={"text"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Номер ISBN</FormHelperText>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : props.bookItem.title}
        id={"title"}
        type={"text"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Название Книги</FormHelperText>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : props.bookItem.author}
        id={"author"}
        type={"text"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Автор</FormHelperText>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : +props.bookItem.dateRealeased}
        id={"dateRealeased"}
        type={"number"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Дата релиза</FormHelperText>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : +props.bookItem.dateContext}
        id={"dateContext"}
        type={"number"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Миллениум событий книги</FormHelperText>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : props.bookItem.tags.join(',')}
        id={"tags"}
        type={"text"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Тэги</FormHelperText>
      <Input 
        autoFocus
        margin="dense"
        defaultValue={props.bookItem===undefined ? "" : props.bookItem.description}
        id={"description"}
        type={"text"}
        fullWidth
        variant="standard"
        sx={inputStyle}
      />
      <FormHelperText>Описание книги</FormHelperText>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <Input 
            id="img"
            fullWidth 
            readOnly
            value={props.bookItem===undefined ? "Добавить Обложку" : props.bookItem.img} 
            sx={inputStyle}
          />
          <FormHelperText>{props.bookItem===undefined ? "" : "Заменить"}</FormHelperText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <FormControlLabel 
                htmlFor="files"
                control={
                  <Input 
                    id="files" 
                    type="file"
                    sx={inputStyle}
                  />
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  )
}