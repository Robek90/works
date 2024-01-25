import { makeAutoObservable } from 'mobx';

export default class feedback {
  feedbackData = [];
  showAlert = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShowAlert = (data) => {
    this.showAlert = data;
  };
  
  setFeedback = (data) => {
    this.feedbackData.push(data);
  };
}