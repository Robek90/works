import {
  storeValue,
  addValue,
  replaceArr,
} from '../../reducer/tablereducer';

import React, { useState } from 'react';
import { Button, TableRow, TableHead } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { StyledTableCell, ButtonTableCell } from './styled';

export default function TableHeader(props) {
  const {
    setRowValues
  } = props;

  const dispatch = useDispatch();

  const [date, setDate] = useState('2011-02-11');
  const [product, setProduct] = useState('any');
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const summ = number + price;

  let disabledNumber = true;
  let disabledPrice = true;

  return (
    <>
      <TableHead>
        <TableRow>
          <StyledTableCell align="center" className='static btnContainer' colSpan="7">
            {/* <Button
              onClick={() => props.service.editColumn()}
            >
              редактировать
            </Button>
            <Button>
              сохранить
            </Button> */}
            <Button
              onClick={() => {
                dispatch(addValue({ date, product, number, price, summ, disabledNumber, disabledPrice }))
              }}
            >
              Создать
            </Button>
          </StyledTableCell>
        </TableRow>
        <TableRow>
          <StyledTableCell/>
          <StyledTableCell align="center">
            <p>Дата</p>
            <input
              placeholder="Date"
              id="date"
              type="date"
              name={'date'}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Продукты</p>
            <input
              placeholder="Product"
              id="product"
              type="text"
              name={'product'}
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Количество шт.</p>
            <input
              placeholder="Number"
              id="number"
              type="number"
              name={'number'}
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            <p>Цена в рублях</p>
            <input
              placeholder="Price"
              id="price"
              type="number"
              name={'price'}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </StyledTableCell>

          <StyledTableCell align="center">
            <p>Cумма:</p>
          </StyledTableCell>
          <StyledTableCell/>
        </TableRow>
      </TableHead>
    </>
  );
}