import { makeAutoObservable } from 'mobx';

export default class Posts {
  posts = [];
  comms = [];

  setPosts = (post) => {
    this.posts = post;
  };

  setComms = (comm) => {
    this.comms = comm;
  };

  constructor() {
    makeAutoObservable(this);
  };
}