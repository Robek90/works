import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddProduct from '../../../assets/icon/addAva.jpg';
import BackBtn from '../../../assets/icon/leftArrow.png';

import useStyles from './muistyle';
import { BootstrapInput } from './bootstrapstyle';

function AddCustomer(props) {
  const { data, triggerSetProductsStore, newProduct, newProductUp } = props;

  const classes = useStyles();

  const inputClear = useRef(null);

  const [customerData, setCustomerData] = useState('');

  const handleChange = (name) => (event) => {
    setCustomerData((newObj) => ({ ...newObj, [name]: event.target.value }));
  };

  const handleSave = () => {
    const unique = data.length + 1;
    triggerSetProductsStore([
      ...data,
      {
        ...customerData,
        id: unique,
      },
    ]);
  };

  let changeClass = classes.nohide;
  if (newProduct === false) {
    changeClass = classes.hide;
  }

  return (
    <div className={changeClass}>
      <div className={classes.darkpanel}></div>
      <div className={classes.addCustomers}>
        <div className={classes.container}>
          <div className={classes.header}>
            <img className={classes.backbtn} src={BackBtn} alt="BACK" onClick={newProductUp} />
            <p className={classes.textLogo}>Add a New Product</p>
          </div>
          <div className={classes.addAva}>
            <img src={AddProduct} alt="PRODUCT" />
          </div>
          <div className={classes.inputsContainer}>
            <div className={classes.input}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                  Product Name
                </InputLabel>
                <BootstrapInput
                  placeholder="Mackbook Pro 2021 14”"
                  id="bootstrap-input"
                  name={'firstName'}
                  ref={inputClear}
                  onChange={handleChange('name')}
                />
              </FormControl>
            </div>
            <div className={classes.input}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                  Order
                </InputLabel>
                <BootstrapInput
                  placeholder="1"
                  id="bootstrap-input"
                  type="number"
                  name={'totalorder'}
                  ref={inputClear}
                  onChange={handleChange('totalorder')}
                />
              </FormControl>
            </div>
            <div className={classes.inputPrice}>
              <FormControl className={classes.formControlPrice}>
                <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                  Price
                </InputLabel>
                <BootstrapInput
                  placeholder="$1200"
                  id="bootstrap-input"
                  type="number"
                  name={'price'}
                  ref={inputClear}
                  onChange={handleChange('price')}
                />
              </FormControl>
            </div>
            <div className={classes.checkbox}>
              <FormControlLabel
                className={classes.chekboxlabel}
                control={<Checkbox name="checked" color="primary" />}
              />
              <p className={classes.chekboxtext}>Negotiable</p>
            </div>
            <div className={classes.input}>
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                  Descriptions
                </InputLabel>
                <BootstrapInput
                  className={classes.textArea}
                  multiline
                  type="string"
                  ref={inputClear}
                  onChange={handleChange('Descriptions')}
                />
              </FormControl>
            </div>
          </div>
          <Button
            className={classes.buttonCreate}
            variant="contained"
            color="primary"
            onMouseUp={newProductUp}
            onClick={() => {
              handleSave();
            }}
          >
            <img src={''} alt="" />
            <span>Save Product</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
