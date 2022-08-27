import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import {
  storeValue,
  addValue,
  replaceArr,
} from '../reducer/tablereducer';
// import Service from './service.js';

export default () => {
  let data = useSelector(storeValue);
  const dispatch = useDispatch();

  // const service = new Service({ dispatch: dispatch, data: data });
  
  const [columns] = useState([
    { name: 'product', title: 'Продукт'},
    { name: 'number', title: 'Количество шт.'},
    { name: 'price', title: 'Цена в рублях'},
    { name: 'summ', title: 'Сумма'},
  ]);

  const [editingStateColumnExtensions] = useState([
    { columnName: 'summ', editingEnabled: false },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      changedRows = [
        ...data,
        ...added.map((row) => ({
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = data.map((row,index) => 
      (changed[index] ? { ...row, ...changed[index] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = data.filter((row,index) => !deletedSet.has(index));
    }

    let result = changedRows.map((item)=>{
      return {
        product: item.product,
        number: item.number,
        price: item.price,
        summ: +item.number + +item.price,
      }
    })

    dispatch(replaceArr(result))
  };

  return (
    <Paper>
      <Grid
        rows={data}
        columns={columns}
      >
        <EditingState
          onCommitChanges={commitChanges}
          columnExtensions={editingStateColumnExtensions}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </Paper>
  );
};