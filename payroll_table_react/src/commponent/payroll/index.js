import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  storeValue,
  addValue,
  replaceArr,
} from '../reducer/tablereducer';

import { Table } from '@mui/material';
import TableHead from './tablehead/index';
import TableBody from './tablebody/index';
import Service from './service.js';

export default function BasicTable() {
  let data = useSelector(storeValue);
  const dispatch = useDispatch();

  const service = new Service({ dispatch: dispatch, data: data });

  return (
    <>

      <Table aria-label="simple table">
        <TableHead 
          service={service}
        />
        <TableBody
          service={service}
          data={data}
        />
      </Table>
    </>
  );
}