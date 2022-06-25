import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Total from '../../components/widgets/total/index.js';
import Products from '../../components/widgets/top_products/index.js';
import AddMonth from '../../components/widgets/add_month/index.js';
import SalesAnalytics from '../../components/widgets/sales_analytics/index.js';
import AddPanel from './right_panel/index.js';
import { inject, observer } from 'mobx-react';

import useStyles from './muistyle';

export default inject('product')(
  observer((props) => {
    const classes = useStyles();

    const [newProduct, setNewProduct] = useState(false);

    const [row, setRow] = useState(props.product.products[0]);

    const handleNewProduct = () => {
      if (newProduct) {
        setNewProduct(false);
      } else {
        setNewProduct(true);
      }
    };

    let changeClass = classes.header;
    if (newProduct) {
      changeClass = classes.darkened;
    }

    return (
      <div className={classes.products}>
        <div className={classes.container}>
          <div className={changeClass}>
            <div className={classes.topHeader}>
              <h2 className={classes.tittle}>Product Analytics</h2>
              <div className={classes.dateSort}>
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'age' }}
                  >
                    <option value="">09.02.2020</option>
                    <option value={10}>10.02.2020</option>
                    <option value={20}>11.02.2020</option>
                    <option value={30}>12.02.2020</option>
                  </NativeSelect>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'age' }}
                  >
                    <option value="">09.03.2020</option>
                    <option value={10}>10.03.2020</option>
                    <option value={20}>11.03.2020</option>
                    <option value={30}>12.03.2020</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.leftButtonBlock}>
                <Button className={classes.button} variant="contained">
                  Product
                </Button>
              </div>
              <div className={classes.rightButtonBlock}>
                <Button className={classes.button} variant="contained" onClick={handleNewProduct}>
                  + Add Product
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <Total />
            <AddMonth />
            <Products data={props.product.products} setRow={setRow} />
            <SalesAnalytics productFocus={row} />
            <AddPanel
              newProduct={newProduct}
              newProductUp={handleNewProduct}
              triggerSetProductsStore={props.product.setProducts}
              data={props.product.products}
            />
          </div>
        </div>
      </div>
    );
  })
);
