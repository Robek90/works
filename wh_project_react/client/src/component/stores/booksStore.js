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

  sendNewBooksData = async (newBook) => {
    let url = '/newBook';

    await fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        newBook
      )
    });
  };

  sendDeleteBook = async (rowid) => {
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

  sendNewImageData = async (data,checkbox,event) => {
    event.preventDefault();

    let url = '/addNewBook';
    
    let formData = new FormData();
    formData.append('id', data.id.value)
    formData.append('title', data.title.value)
    formData.append('author', data.author.value)
    formData.append('dateRealeased', data.dateRealeased.value)
    formData.append('dateContext', data.dateContext.value)
    formData.append('categories', `allbooks, ${data.categories.value}`)
    formData.append('race', checkbox) // исправить получение знаяения чекбоксов
    formData.append('tags', data.tags.value)
    formData.append('description', data.description.value)
    formData.append('img', data.files.files[0]['name'])

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

  setBooks = (data) => {
    this.books = data
  };

  setState = (data) => {
    this.state = data
  };
};