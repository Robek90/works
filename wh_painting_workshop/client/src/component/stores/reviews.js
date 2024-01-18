import { makeAutoObservable } from 'mobx';

export default class reviews {
  reviewsData = [];
  showAlert = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShowAlert = (data) => {
    this.showAlert = data;
  };
  
  setReviews = (data) => {
    this.reviewsData.push(data);
  };
}