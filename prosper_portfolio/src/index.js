import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { Provider } from 'mobx-react';
// import menustore from './components/stores/menuStore';
// import usersstore from './components/stores/usersStore';
// import productsstore from './components/stores/productsStore';

// const menuStore = new menustore();
// const usersStore = new usersstore();
// const productsStore = new productsstore();

// const stores = {
//   menu: menuStore,
//   user: usersStore,
//   product: productsStore,
// };

const root = createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Provider 
    // {...stores}
    >
      <App />
    </Provider>
  </BrowserRouter>,
);