import { makeAutoObservable, runInAction } from 'mobx';

export default class shoppingCart {
  shoppingCartData = JSON.parse(localStorage.getItem("cart")) || [];
  showAlert = false;

  constructor() {
    makeAutoObservable(this);
  };

  setShowAlert = (data) => {
    this.showAlert = data;
  };
  
  setShoppingCart = (data) => {
    this.shoppingCartData.push(data);
    runInAction(()=>{
      localStorage.setItem("cart", JSON.stringify(this.shoppingCartData));
    })
  };

  changeShoppingCart = (data) => {
    this.shoppingCartData = data;
    runInAction(()=>{
      localStorage.setItem("cart", JSON.stringify(this.shoppingCartData));
    })
  };

}