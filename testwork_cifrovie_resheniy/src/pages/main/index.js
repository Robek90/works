import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Users from './users';

import Background from '../../assets/striped_circles.png'

import useStyles from './muistyle';

export default inject('users', 'posts')(
  observer((props) => {
    const classes = useStyles();

    const [ error, setError ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const [currentUsersIdx, setCurrentUsersIdx] = useState(0);

    const prevSlide = () => {
      const resetToVeryBack = currentUsersIdx === 0;

      const index = resetToVeryBack ? props.users.users.length - 1 : currentUsersIdx - 1;
      console.log(index);
      setCurrentUsersIdx(index);
    };

    const nextSlide = () => {
      const resetIndex = currentUsersIdx === props.users.users.length - 1;

      const index = resetIndex ? 0 : currentUsersIdx + 1;
      console.log(index);
      setCurrentUsersIdx(index);
    };

    useEffect(() => {
      const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments'
      ];
      
      Promise.all(urls.map(url => fetch(url)
        .then(res => res.json())))
        .then(
        results => {
          props.users.setUsers([...results[0]]);
          props.posts.setPosts([...results[1]]);
          props.posts.setComms([...results[2]]);
          setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
    }, [props]);

    return (
      <>
        <div className={classes.topContainer}>
          <img className={classes.backImg} src={Background} alt=''/>
          <div className={classes.centralBlock}>
            <h1 className={classes.topTitle}>Twenty One Pilots</h1>
            <p className={classes.date}>22.02.23 в 21:00</p>
          </div>
          <div className={classes.topBtns}>
            <div 
              className={classes.leftBtnArrow} 
              onClick={prevSlide}
            >
              <span className={classes.leftArrow}/>
            </div>
            <button className={classes.centralBtn}>Купить билет</button>
            <div 
              className={classes.rightBtnArrow} 
              onClick={nextSlide}
            >
              <span className={classes.rightArrow}/>
            </div>
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.usersBlock}>
            <div className={classes.head}>
              <p className={classes.title}>Купили билеты</p>
              <p className={classes.count}>
                932/
                <span className={classes.counter}>1000</span>
              </p>
            </div>
            <Users 
              userIdx={currentUsersIdx}
              error={error}
              isLoaded={isLoaded}
              users={props.users.users}
            />
          </div>
          <div className={classes.infoBlock}>
            <div className={classes.leftBlock}>
              <p className={classes.leftBlockTitle}>
                О площадке
              </p>
              <div className={classes.leftBlockContent}>
                <p className={classes.leftBlockContentTitle}>
                  Современная площадка для проведения концертов и других мероприятий любой сложности.
                </p>
                <p className={classes.leftBlockContentText}>
                  Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам.
                  Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам.
                  Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам.
                  Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам.
                </p>
              </div>
            </div>
            <div className={classes.rightBlock}>
              <p className={classes.rightBlockTitle}>
                Оставить заявку на проведение концерта
              </p>
              <textarea 
                placeholder='Расскажите о вашем предложении'
                className={classes.textarea}
              />
              <button className={classes.rightBlockBtn}>
                отправить
              </button>
            </div>
          </div>
          <div className={classes.footer}>
            <p className={classes.footerTitle}>О группе</p>
            <p className={classes.footerText}>
              Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
            </p>
          </div>
        </div>
      </>
    );
  })
);
