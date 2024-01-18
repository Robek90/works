import { makeAutoObservable, runInAction } from 'mobx';

export default class Catalog {
  catalogData = "empty";
  state = "pending";

  constructor() {
    makeAutoObservable(this);
  }

  getCatalogData = async () => {
    try {
      const url = '/catalog';
      const response = await fetch(url);

      const data = response.json();

      runInAction(()=>{
        this.catalogData = data.then(res=>(res));
        this.state = "done";
      })
    } catch (e) {
      runInAction(()=>{
        this.state = "error";
      })
    }
  };
}
