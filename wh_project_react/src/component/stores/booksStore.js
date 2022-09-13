import { makeAutoObservable } from 'mobx';
import  { mockData }  from './data/mockData';

export default class BooksList {
  books = [...mockData];
  
  setBooks = (data) => {
    this.books = data;
  };

  constructor() {
    makeAutoObservable(this);
  }
}