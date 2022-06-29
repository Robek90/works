import React, { useState } from "react";
import { Link } from "react-router-dom";

import useStyles from './muistyle';

const HookedCarousel = (props) => {
  const classes = useStyles();
  const [users] = useState(props.data);

  const activeUsersSourcesFromState = users.slice(
    props.userIdx,
    props.userIdx + 5
  );

  const usersToDisplay =
    activeUsersSourcesFromState.length < 5
      ?
        [
          ...activeUsersSourcesFromState,
          ...users.slice(0, 5 - activeUsersSourcesFromState.length)
        ]
      : activeUsersSourcesFromState;

  return (
    <div className={classes.usersList}>
      {usersToDisplay.map((user, id) => (
        <div key={id} className={classes.userCard}>
          <p className={classes.userName}>{user.name}</p>
          <p className={classes.userCity}>{user.address.city}</p>
          <Link 
              to={{
                pathname: `posts/${id}`,
                user: user
              }}
            >
            <button className={classes.userBtnProfile}>
              Смотреть профиль
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HookedCarousel;
