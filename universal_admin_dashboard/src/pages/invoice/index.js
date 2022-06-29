import React, { useState } from 'react';
import InvoiceTable from './list/invoicetable.js';
import NewInvoice from './list/newinvoice.js';
import Button from '@material-ui/core/Button';

import useStyles from './muistyle';

export default function Invoice() {
  const classes = useStyles();

  const [list, setList] = useState([]);

  const [selectTable, setSelectTable] = useState(true);
  const [newInvoice, setNewInvoice] = useState(false);

  const handleNewCustomer = () => {
    setNewInvoice(true);
    setSelectTable(false);
  };

  const handleClose = () => {
    setSelectTable(true);
    setNewInvoice(false);
  };

  const createArray = (item) => {
    setList([...item]);
  };
  // function handleDrawRow(i) {
  //   setRow(i)
  // };

  // const setLocalStorage = (data) => {
  //   localStorage.setItem("Customers", JSON.stringify(data));
  // };

  // const clearStorage = () => {
  //   localStorage.clear()
  //   setData([])
  // };

  // useEffect(() => {
  //   setLocalStorage(data);
  // }, [data]);

  return (
    <>
      <div className={classes.invoice}>
        <div className={classes.container}>
          {selectTable && (
            <>
              <div
                className={classes.header}
                // onChange={}
              >
                <h2 className={classes.tittle}>Invoice</h2>
                <div className={classes.buttonContainer}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    onClick={handleNewCustomer}
                  >
                    + Add New
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    // onClick={clearStorage}
                  >
                    clear
                  </Button>
                </div>
              </div>
              <InvoiceTable
                list={list}
                // handleDrawRow={handleDrawRow}
              />
            </>
          )}
          {newInvoice && <NewInvoice list={list} listUp={createArray} close={handleClose} />}
        </div>
      </div>
    </>
  );
}
