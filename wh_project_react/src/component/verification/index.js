import { inject, observer } from 'mobx-react';
import { useState, useMemo } from 'react';

export default inject('verification') (
  observer((props) => {
    let setUser = props.verification.setUser
    //eslint-disable-next-line no-undef
    let vk = VK.Auth;
    
    useMemo(()=>{
      setUser({
        type: 'LOGIN_REQUEST',
      })
      vk.login((r) => {
        if (r.session) {
          let username = r.session.user.first_name;
          setUser({
            type: 'LOGIN_SUCCESS',
            payload: username,
          });
        } else {
          setUser({
            type: 'LOGIN_FAIL',
            error: true,
            payload: new Error('Ошибка авторизации'),
          });
        }  
      }, 4);
    },[vk, setUser])
  })
)