import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'

import useStyles from './muistyle';

export default inject('users', 'posts')(
  observer((props) => {
  const classes = useStyles();

  const [ hideClass, setHideClass ] = useState(classes.cardPostHide);

  let gridClass = classes.contentHide;

  const posts = props.posts.posts;
  const user = props.location.user;
  
  const filter = posts.filter((posts)=> posts.userId === user.id);

  const hadleClick = () => {
    if(hideClass === classes.cardPostHide) {
      setHideClass(classes.cardPost)
    } else {
      setHideClass(classes.cardPostHide)
    }
  };

  return (
    <>
    <div className={classes.userPosts}>
    <div className={classes.postHead}>
        <p className={classes.postTitle}>Посты</p>
        <button 
          className={classes.showAll}
          onClick={hadleClick}
        >
          Показать все
        </button>
      </div>
      <div className={hideClass === classes.cardPostHide  ? gridClass : classes.content}>
      {filter.map((post, id) => (
        <Link
        to={{
          pathname: `/posts/comments/${id}`,
          post: post,
          user: user
        }}
          key={id} 
          className={id > '2' ? hideClass : classes.cardPost}
        >
          <p className={classes.cardTitle}>
            {post.title}
          </p>
          <p className={classes.cardText}>
            {post.body}
          </p>
        </Link>
        ))}
      </div>
      <div className={classes.bottomContainer}>
        <p className={classes.bottomContainerTitle}>
          Публикации
        </p>
        <div className={classes.bottomContent}>
          <div className={classes.square}>

          </div>
          <div className={classes.square}>

          </div>
          <div className={classes.square}>

          </div>
          <div className={classes.square}>

          </div>
          <div className={classes.square}>

          </div>
          <div className={classes.square}>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}))