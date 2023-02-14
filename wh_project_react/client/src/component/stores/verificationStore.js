import { makeAutoObservable } from 'mobx';

export default class AuthUsers {
  userVerification = [];
  
  setUser = (data) => {
    this.userVerification = data;
  };

  constructor() {
    makeAutoObservable(this);
  }
}