import { makeAutoObservable } from 'mobx';

export default class Menu {
  value = false;

  handleTrigger = () => {
    if (this.value) {
      this.value = false;
    } else {
      this.value = true;
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}
