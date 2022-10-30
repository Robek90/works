import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import history from "./utils/history";
import { Provider } from 'mobx-react';

import App from './App';
import booksstore from './component/stores/booksStore';

const booksStore = new booksstore();

const stores = {
  books: booksStore,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={history}>
    <Provider {...stores}>
      <App history={history}/>
    </Provider>
  </BrowserRouter>,
);
