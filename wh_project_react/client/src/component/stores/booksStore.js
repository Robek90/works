import { makeAutoObservable } from 'mobx';
import { formatBooksArray } from '../../utils/formatData';

export default class BooksList {
  books = [];
  state = "pending";

  constructor() {
    makeAutoObservable(this);
  };

  getBooksRequestData = async () => {
    this.books = [];
    this.state = "pending";

    try {
      let url = '/booksList';
      let response = await fetch(url);

      let data = response.json();

      this.setBooks(data.then(res=>(formatBooksArray(res))))

      this.setState("done") 

      return this.books
    } catch (e) {
      this.setState("error")
    }
  };

  sendNewBookData = async (data,event) => {
    let url = '/addNewBook';
    
    let formData = new FormData();

    formData.append('id', data.id.value)
    formData.append('title', data.title.value)
    formData.append('author', data.author.value)
    formData.append('dateRealeased', data.dateRealeased.value)
    formData.append('dateContext', data.dateContext.value)
    formData.append('categories', `allbooks, ${data.categories.value}`)
    // formData.append('race', checkbox) // исправить получение знаяения чекбоксов
    formData.append('tags', data.tags.value)
    formData.append('description', data.description.value)
    formData.append('img', data.files.files[0]['name'])
    console.log(data.files.files[0]['name']);
    for(let i = 0; i < data.files.files.length; i++) {
      formData.append("files", data.files.files[i]);
    }


    let response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    let result = await response.json();

    console.log(result.message);
  };

  sendDeleteBookData = async (rowid) => {
    let url = '/deleteBook';

    let formData = new FormData();
    formData.append('id', rowid)

    let response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    let result = await response.json();

    console.log(result.message);
  };

  sendEditBookData = async (data,event,rowid) => {
    let url = '/editBook';
    let checkbox = Object.values(data.race).filter(item=>item.checked === true).map((item)=>item.name)

    let formData = new FormData();

    formData.append('rowid', rowid)
    formData.append('id', data.id.value)
    formData.append('title', data.title.value)
    formData.append('author', data.author.value)
    formData.append('dateRealeased', data.dateRealeased.value)
    formData.append('dateContext', data.dateContext.value)
    formData.append('categories', `allbooks,${data.categories.value}`)
    formData.append('race', checkbox.join(',')) // исправить получение знаяения чекбоксов
    formData.append('tags', data.tags.value)
    formData.append('description', data.description.value)
    
    if(data.files.files[0]===undefined){
      formData.append('img', data.img.value)
    } else {
      formData.append('img', data.files.files[0]['name'])
      for(let i = 0; i < data.files.files.length; i++) {
        formData.append("files", data.files.files[i]);
      }
    }

    let response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    let result = await response.json();

    console.log(result.message);
  };

  setBooks = (data) => {
    this.books = data
  };

  setState = (data) => {
    this.state = data
  };
};