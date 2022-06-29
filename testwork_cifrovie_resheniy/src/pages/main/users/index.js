import React from 'react';
import Loader from '../../../assets/ghostLoader.gif';
import Carousel from '../../../component/carousel';

import useStyles from './muistyle';

export default function Users(props) {
  const classes = useStyles();

  const { error, isLoaded, users, userIdx } = props;

  return error ? (
    <>
      <div className={classes.errorBlock}>
        <p className={classes.errorTextTitle}>Что то пошло не так!!!</p>
        <p className={classes.errorText}>Перезагрузите страницу или вернитесь позже...</p>
      </div>
    </>
  ): !isLoaded ? (
    <>
      <div className={classes.loader}>
        <img src={Loader} alt=""></img>
        <p className={classes.loaderText}>Загрузка...</p>
      </div>
    </>
  ) : (
    <>
      <Carousel 
        userIdx={userIdx}
        data={users}
      />
    </>
  );
}
