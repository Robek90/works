import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './muistyle';

export default function Header(props) {
  const classes = useStyles();

  return (
  <>
    <header className={classes.header}>
      <Link to='/'>
        <h2 className={classes.title}>{props.title}</h2>
      </Link>
      <div className={classes.headerBtns}>
        <button 
          onClick={() => props.handleSetBlind()}
          className={classes.blind}
        >
          {props.blind}
        </button>
        <button className={classes.profile}>{props.profile}</button>
      </div>
    </header>
  </>
  );
}