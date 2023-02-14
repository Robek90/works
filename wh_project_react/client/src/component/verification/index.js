import { inject, observer } from 'mobx-react';
import { useState, useMemo } from 'react';

export default inject('verification') (
  observer((props) => {
    let setUser = props.verification.setUser
    //eslint-disable-next-line no-undef
    let vk = VK;

    
    useMemo(()=>{
      setUser({
        type: 'LOGIN_REQUEST',
      })
      vk.Auth.login((r) => {
        if (r.session) {
          console.log(r);
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
      });
      
      vk.Api.call('users.get', {user_ids: 323940, v:"5.73"}, function(r) {
        if(r.response) {
          alert('Привет, ' + r.response[0].first_name);
        }
      });
    },[vk, setUser])
  })
)