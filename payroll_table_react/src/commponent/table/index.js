import React, { useState, useCallback, useEffect } from 'react';
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
} from '../reducer/tablereducer';
import Service from './service.js';

export default () => {
  let data = useSelector(storeValue);

  const dispatch = useDispatch();
  
  const [columns] = useState([
    { name: 'product', title: 'Product'},
    { name: 'number', title: 'Numbers'},
    { name: 'price', title: 'Price'},
    { name: 'summ', title: 'Summ'},
  ]);

  const [editingStateColumnExtensions] = useState([
    { columnName: 'summ', editingEnabled: false },
  ]);
  const [validationStatus, setValidationStatus] = useState({});

  const [finalAmount, setFinalAmount] = useState();

  const service = new Service({ 
    dispatch: dispatch, 
    data: data, 
    columns: columns, 
    validationStatus: validationStatus, 
    setValidationStatus: setValidationStatus,
  });

  const Cell = useCallback((props) => {
    const { tableRow: { rowId }, column: { name: columnName } } = props;
    const columnStatus = validationStatus[rowId]?.[columnName];
    const valid = !columnStatus || columnStatus.isValid;
    const style = {
      ...(!valid ? { border: '1px solid red' } : null),
    };
    const title = valid ? '' : validationStatus[rowId][columnName].error;

    return (
      <Table.Cell
        {...props}
        style={style}
        title={title}
      />
    );
  }, [validationStatus]);

  function commitChangesProps({ added, changed, deleted }) {
    service.commitChanges({ added, changed, deleted })
  };

  useEffect(() => {
    setFinalAmount(service.finalAmount())
  },[data]);

  return (
    <Paper>
      <div className='mulResultContainer'>
        {finalAmount}
      </div>
      <Grid
        rows={data}
        columns={columns}
      >
        <EditingState
          onCommitChanges={commitChangesProps}
          columnExtensions={editingStateColumnExtensions}
        />
        <Table 
          cellComponent={Cell}
        />
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