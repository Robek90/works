import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'mobx-react';
import history from './utils/history';

import App from './App';

import catalogstore from './component/stores/catalog';
import categorystore from './component/stores/category';
import productstore from './component/stores/product';
import shoppingcartstore from './component/stores/shoppingCart';
import reviewsstore from './component/stores/reviews';

const catalogStore = new catalogstore();
const categoryStore = new categorystore(); 
const productStore = new productstore();
const shoppingCartStore = new shoppingcartstore(); 
const reviewsStore = new reviewsstore();

const stores = {
  catalog: catalogStore,
  category: categoryStore,
  product: productStore,
  shoppingCart: shoppingCartStore,
  reviews: reviewsStore
}

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={history}>
    <Provider {...stores}>
      <App history={history}/>
    </Provider>
  </BrowserRouter>,
);
