import React, { useState, useMemo } from 'react';
import Customers from './customers/index.js';
import Button from '@material-ui/core/Button';
import AddCustomer from './customers/rightpanel/addcustomer.js';
import InfoCustomer from './customers/rightpanel/infocustomer.js';
import { inject, observer } from 'mobx-react';

import useStyles from './muistyle';

export default inject('user')(
  observer((props) => {
    const classes = useStyles();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [row, setRow] = useState('');

    const [selectedRow, setSelectedRow] = useState(false);
    const [newCustomer, setNewCustomer] = useState(false);

    const handleSelectedRow = () => {
      if (setSelectedRow(true)) {
        setSelectedRow(true);
      } else {
        setNewCustomer(false);
      }
    };

    const handleNewCustomer = () => {
      if (setNewCustomer(!newCustomer)) {
        setNewCustomer(true);
      } else {
        setSelectedRow(false);
      }
    };

    const handleClose = () => {
      setSelectedRow(false);
      setNewCustomer(false);
    };

    function handleDrawRow(i) {
      setRow(i);
    }

    const deleteItem = (rowid) => {
      updateUsersStore(props.user.users.filter((row) => row.id !== rowid));
    };

    const updateUsersStore = (data) => {
      props.user.setUsers(data);
    };

    useMemo(() => {
      fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then(
          (result) => {
            updateUsersStore(result.results);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
    }, []);

    return (
      <>
        <div className={classes.analytics}>
          <div className={classes.container}>
            <div className={classes.header}>
              <h2 className={classes.tittle}>Customer List</h2>
              <div className={classes.buttonContainer}>
                <Button className={classes.button} variant="contained" onClick={handleNewCustomer}>
                  + Add Customer
                </Button>
              </div>
            </div>
            <Customers
              data={props.user.users}
              error={error}
              isLoaded={isLoaded}
              rows={row}
              selectedRow={selectedRow}
              handleRow={handleSelectedRow}
              handleDrawRow={handleDrawRow}
              deleteRow={deleteItem}
            />
          </div>
          {selectedRow && <InfoCustomer rows={row} close={handleClose} />}
          {newCustomer && (
            <AddCustomer
              triggerSetUsersStore={updateUsersStore}
              data={props.user.users}
              close={handleClose}
            />
          )}
        </div>
      </>
    );
  })
);
