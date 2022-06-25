import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CrosClose from '../../../assets/icon/CrossClose.jpg';
import addAva from '../../../assets/icon/addAva.jpg';

import useStyles from './muistyle';
import { BootstrapInput } from './bootstrapstyle';

function AddCustomer(props) {
  const { close, list, listUp } = props;

  const classes = useStyles();

  const inputClear = useRef(null);

  const [invoceData, setInvoceData] = useState('');

  const [setAge] = useState('');

  const handleChange = (name) => (event) => {
    setInvoceData((newObj) => ({ ...newObj, [name]: event.target.value }));
  };

  const handleSave = () => {
    const unique = list.length + 1;
    listUp([
      ...list,
      {
        ...invoceData,
        id: '#' + unique,
      },
    ]);
    // inputClear.current.value = "";
    // setCustomerData("");
  };

  const inputValue = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.addCustomers}>
      <div className={classes.container}>
        <div className={classes.header}>
          <p className={classes.textLogo}>Create New Invoice</p>
          <img onClick={close} className={classes.cross} src={CrosClose} alt="Cross" />
        </div>
        <div className={classes.addAva}>
          <img src={addAva} alt="AVATAR" />
        </div>
        <div className={classes.inputsContainer}>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Invoice id
              </InputLabel>
              <BootstrapInput
                placeholder="Ivan"
                id="bootstrap-input"
                name={'firstName'}
                ref={inputClear}
                onChange={handleChange('firstName')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Date
              </InputLabel>
              <BootstrapInput
                placeholder="Ivanov"
                id="bootstrap-input"
                name={'lastName'}
                ref={inputClear}
                onChange={handleChange('lastName')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Name
              </InputLabel>
              <BootstrapInput
                placeholder="Example@gmail.com"
                id="bootstrap-input"
                type="email"
                name={'email'}
                ref={inputClear}
                onChange={handleChange('email')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Email
              </InputLabel>
              <BootstrapInput
                placeholder="88002000600"
                id="bootstrap-input"
                name={'number'}
                ref={inputClear}
                onChange={handleChange('number')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Address
              </InputLabel>
              <Select
                onClick={inputValue}
                input={
                  <BootstrapInput
                    id="bootstrap-input"
                    name={'gender'}
                    ref={inputClear}
                    onChange={handleChange('gender')}
                  />
                }
              >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Button
          className={classes.buttonCreate}
          variant="contained"
          color="primary"
          onClick={() => {
            handleSave();
          }}
        >
          Add Customer
        </Button>
      </div>
    </div>
  );
}

export default AddCustomer;
