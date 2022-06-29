import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'mobx-react';

import usersstore from './stores/users';
import postsstore from './stores/posts';

const usersStore = new usersstore();
const postsStore = new postsstore()

const stores = {
  users: usersStore,
  posts: postsStore
};

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
