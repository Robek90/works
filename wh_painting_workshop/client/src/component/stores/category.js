import { makeAutoObservable, runInAction } from 'mobx';

export default class Category {
  categoryData = "empty";
  state = "pending";

  constructor() {
    makeAutoObservable(this);
  }

  getCategoryData = async () => {
    try {
      const url = '/category';
      const response = await fetch(url);

      const data = response.json();

      runInAction(()=>{
        this.categoryData = data.then(res=>(res));
        this.state = "done";
      })
    } catch (e) {
      runInAction(()=>{
        this.state = "error";
      })
    }
  };
}
