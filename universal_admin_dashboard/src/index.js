import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import menustore from './components/stores/menuStore';
import usersstore from './components/stores/usersStore';
import productsstore from './components/stores/productsStore';

const menuStore = new menustore();
const usersStore = new usersstore();
const productsStore = new productsstore();

const stores = {
  menu: menuStore,
  user: usersStore,
  product: productsStore,
};

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
