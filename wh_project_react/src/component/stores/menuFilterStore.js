import { makeAutoObservable } from 'mobx';

export default class MenuFilterList {
  menufilter = [];

  setMenu = (data) => {
    this.menufilter = data;
  };

  constructor() {
    makeAutoObservable(this);
  }
}