import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import history from "./utils/history";
import { Provider } from 'mobx-react';

import App from './App';
import booksstore from './component/stores/booksStore';
import menufilters from './component/stores/menuFilterStore';

const booksStore = new booksstore();
const menuFilters = new menufilters();

const stores = {
  books: booksStore,
  menufilter: menuFilters,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={history}>
    <Provider {...stores}>
      <App history={history}/>
    </Provider>
  </BrowserRouter>,
);
