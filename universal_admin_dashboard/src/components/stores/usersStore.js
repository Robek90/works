import { makeAutoObservable } from 'mobx';

export default class UsersList {
  users = [];

  setUsers = (data) => {
    this.users = data;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
