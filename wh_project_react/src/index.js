import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import history from "./utils/history";
import { Provider } from 'mobx-react';

import App from './App';
import booksstore from './component/stores/booksStore';
import verificationstore from './component/stores/verificationStore';

const booksStore = new booksstore();
const verificationStore = new verificationstore()

const stores = {
  books: booksStore,
  verification: verificationStore,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={history}>
    <Provider {...stores}>
      <App history={history}/>
    </Provider>
  </BrowserRouter>,
);
