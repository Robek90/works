import { makeAutoObservable } from 'mobx';
import { mokData } from './mokData';

export default class ProductsList {
  products = [...mokData];

  setProducts = (data) => {
    this.products = data;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
