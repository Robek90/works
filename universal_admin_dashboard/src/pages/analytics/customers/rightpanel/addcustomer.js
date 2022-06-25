import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CrosClose from '../../../../assets/icon/CrossClose.jpg';
import addAva from '../../../../assets/icon/addAva.jpg';

import useAddStyles from './stylesAddC';
import { BootstrapInput } from './bootstrapstyle';

function AddCustomer(props) {
  const { close, data, triggerSetUsersStore } = props;

  const classes = useAddStyles();

  const inputClear = useRef(null);

  const [customerData, setCustomerData] = useState('');

  const [setAge] = useState('');

  const handleChange = (name) => (event) => {
    setCustomerData((newObj) => ({ ...newObj, [name]: event.target.value }));
  };

  const handleSave = () => {
    const unique = data.length + 1;
    triggerSetUsersStore([
      ...data,
      {
        name: {
          first: customerData.first,
          last: customerData.last,
        },
        phone: customerData.phone,
        email: customerData.email,
        gender: customerData.gender,
        location: {
          city: 'Paris',
          street: 'first street',
          countrty: 'France',
        },
        id: '#' + unique,
      },
    ]);
  };

  const inputValue = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.addCustomers}>
      <div className={classes.container}>
        <div className={classes.header}>
          <p className={classes.textLogo}>Add Customer</p>
          <img onClick={close} className={classes.cross} src={CrosClose} alt="Cross" />
        </div>
        <div className={classes.addAva}>
          <img src={addAva} alt="AVATAR" />
        </div>
        <div className={classes.inputsContainer}>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                First Name
              </InputLabel>
              <BootstrapInput
                placeholder="Ivan"
                id="bootstrap-input"
                name={'first'}
                ref={inputClear}
                onChange={handleChange('first')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Last Name
              </InputLabel>
              <BootstrapInput
                placeholder="Ivanov"
                id="bootstrap-input"
                name={'last'}
                ref={inputClear}
                onChange={handleChange('last')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Email
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
                Phone Number
              </InputLabel>
              <BootstrapInput
                placeholder="88002000600"
                id="bootstrap-input"
                name={'phone'}
                ref={inputClear}
                onChange={handleChange('phone')}
              />
            </FormControl>
          </div>
          <div className={classes.input}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                Gender
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
                <MenuItem value={'male'}>male</MenuItem>
                <MenuItem value={'female'}>female</MenuItem>
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
