import { makeAutoObservable, runInAction } from 'mobx';

export default class Product {
  productData = "empty";
  state = "pending";

  constructor() {
    makeAutoObservable(this);
  }

  getProductData = async () => {
    try {
      const url = '/product';
      const response = await fetch(url);

      const data = response.json();

      runInAction(()=>{
        this.productData = data.then(res=>(res));
        this.state = "done";
      })
    } catch (e) {
      runInAction(()=>{
        this.state = "error";
      })
    }
  };
}
