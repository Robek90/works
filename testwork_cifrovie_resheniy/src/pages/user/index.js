import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Posts from '../posts';
import Comments from '../comments';

import useStyles from './muistyle';

export default inject('users', 'posts')(
  observer((props) => {
    const classes = useStyles();

    const user = props.location.user;

    if (!props.location.user) return <Redirect to="/" />;

    return (
      <>
        <div className={classes.userpage}>
          <div className={classes.head}>
            <div className={classes.tophead}>
              <p className={classes.topname}>
                {user.name}
              </p>
            </div>
            <div className={classes.bottomhead}>
              <p className={classes.userInfo}>
                {user.address.city}
              </p>
              <p className={classes.userInfo}>
                {user.email}
              </p>  
              <p className={classes.userInfo}>
                {user.phone}
              </p>
              <p className={classes.userInfo}>
                {user.website}
              </p>
              <p className={classes.userInfo}>
                <span className={classes.company}>{user.company.name}</span>
                <br/>
                <span className={classes.companybs}>{user.company.bs}</span>
              </p>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/posts/comments/:id" component={Comments} />
          <Route path="/posts/:id" component={Posts} />
        </Switch>
      </>
    );
}))