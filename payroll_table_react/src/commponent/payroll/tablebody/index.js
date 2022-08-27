import React, { useState } from 'react';
import TableBody from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


import { StyledTableCell } from './styled';

export default (props) => {
  const [editNumber, setEditNumber] = useState(0);
  const [editPrice, setEditPrice] = useState(0);
  
  return (
    <>
      <TableBody>
        {
          props.data.map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell>
                <IconButton
                  onClick={() => props.service.deleteRow({ row: row, index: index })}
                  aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell>{row.product}</StyledTableCell>
              <StyledTableCell>
                <input
                  placeholder="Number"
                  id="number"
                  type="number"
                  name={'number'}
                  disabled={row.disabledNumber}
                  value={row.number}
                  onChange={(e) => {
                    setEditNumber(e.target.value);
                  }}
                />
              </StyledTableCell>
              <StyledTableCell>
                <input
                  placeholder="Price"
                  id="price"
                  type="number"
                  disabled={row.disabledPrice}
                  value={row.price}
                  onChange={(e) => {
                    setEditPrice(e.target.value);
                  }}
                />
              </StyledTableCell>
              <StyledTableCell>{row.summ}</StyledTableCell>

              <StyledTableCell>
                <IconButton 
                  onClick={() => props.service.editRow({ row: row, index: index })}
                  aria-label="edit"
                  >
                  <EditIcon />
                </IconButton>
                <IconButton 
                  onClick={() => props.service.saveRow({ editNumber: editNumber, editPrice: editPrice, index: index })}
                  aria-label="save"
                  >
                  <SaveIcon />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </>
  );
}