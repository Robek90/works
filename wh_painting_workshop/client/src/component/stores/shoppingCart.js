import { makeAutoObservable } from 'mobx';

export default class shoppingCart {
  shoppingCartData = [];
  showAlert = false;

  constructor() {
    makeAutoObservable(this);
  };

  setShowAlert = (data) => {
    this.showAlert = data;
  };
  
  setShoppingCart = (data) => {
    this.shoppingCartData.push(data);
  };

  quantityShoppingCart = (data) => {
    this.shoppingCartData = data;
  };

  deleteShoppingCartProduct = (data) => {
    this.shoppingCartData = data;
  };
}