import { makeAutoObservable } from 'mobx';

export default class Users {
  users = [];

  setUsers = (user) => {
    this.users = user;
  };

  constructor() {
    makeAutoObservable(this);
  }
}