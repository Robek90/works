import React from 'react';
import Inputform from '../../component/inputform/index';

import { inject, observer } from 'mobx-react';

import useStyles from './muistyle';

export default inject('posts')(
  observer((props) => {
  console.log(props);
  const classes = useStyles();

  const comms = props.posts.comms;;
  const post = props.location.post;

  return (
    <>
      <div className={classes.postTitle}>
        Пост:
      </div>
      <div className={classes.post}>
        <p className={classes.postName}>
          {post.title}
        </p>
        <p className={classes.postBody}>
          {post.body}
        </p>
      </div>
      <div className={classes.commTitle}>
        Комментарии:
      </div>
      <div className={classes.commList}>
        {comms.filter((comms)=> comms.postId === post.id).map((comm, id) => (
          <div 
            key={id} 
            className={classes.commHead}
          >
            <p className={classes.commName}>{comm.name}</p>
            <p className={classes.commEmail}>{comm.email}</p>
            <p className={classes.commText}>
              {comm.body}
            </p>
          </div>
        ))}
      </div>
      <Inputform id={post.id}/>
    </>
  );
}))