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

      this.setBooks(data)

      this.setState("done") 

      return this.books.then(res=>formatBooksArray(res))
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

  sendNewImageData = async (data,checkbox) => {
    let url = '/uploads';

    let formData = new FormData();
    formData.append('id', data.id.value)
    formData.append('title', data.title.value)
    formData.append('author', data.author.value)
    formData.append('dateRealeased', data.dateRealeased.value)
    formData.append('dateContext', data.dateContext.value)
    formData.append('categories', data.categories.value)
    formData.append('race', checkbox)
    formData.append('tags', data.tags.value)
    formData.append('description', data.description.value)
    formData.append('img', data.img.value)

    let response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    let result = await response.json();

    alert(result.message);
  };

  setBooks = (data) => {
    this.books = data
  };

  setState = (data) => {
    this.state = data
  };
};