import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Mainpage, Userpage } from './pages/index';

import Header from './component/header/header';

import useStyles from './muistyle';
import'./styles/blind.css';

function App() {
  const [blind, setBlind] = useState(false);

  const handleSetBlind = () => {
    setBlind(!blind)
  }
  const classes = useStyles();

  return (
    <div className={`${classes.wrapper} ${blind ? 'blind' : ''}`}>
      <Header 
        handleSetBlind={handleSetBlind}
        title='Concert CLUB' 
        blind='Версия для слабовидящих' 
        profile='Мой профиль'
      />
      <main className={classes.mainContainer}>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route path="/posts" component={Userpage} />
          <Redirect to='/' />
        </Switch>
      </main>
    </div>
  )
}

export default App;
