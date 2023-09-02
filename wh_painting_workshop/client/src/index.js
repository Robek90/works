import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'mobx-react';
import history from './utils/history'

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter history={history}>
    <Provider>
      <App history={history}/>
    </Provider>
  </BrowserRouter>,
);
