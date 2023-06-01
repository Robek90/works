import { makeAutoObservable, runInAction } from 'mobx';
import { formatBooksArray } from '../../utils/formatData';

export default class BooksList {
  books = [];
  state = "pending";

  constructor() {
    makeAutoObservable(this);
  };

  getBooksRequestData = async () => {
    try {
      const url = '/booksList';
      const response = await fetch(url);

      const data = response.json();

      runInAction(()=>{
        this.books = data.then(res=>(formatBooksArray(res)));
        this.state = "done";
      })
    } catch (e) {
      runInAction(()=>{
        this.state = "error";
      })
    }
  };

  sendNewBookData = async (data) => {
    let url = '/addNewBook';
    let checkbox = Object.values(data.race).filter(item=>item.checked === true).map((item)=>item.name);

    let formData = new FormData();
    formData.append('id', data.id.value)
    formData.append('title', data.title.value)
    formData.append('author', data.author.value)
    formData.append('dateRealeased', data.dateRealeased.value)
    formData.append('dateContext', data.dateContext.value)
    formData.append('categories', `allbooks, ${data.categories.value}`)
    formData.append('race', checkbox.join(','))
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

    this.state = "add";
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

    this.state = "delete";
  };

  sendEditBookData = async (data,rowid) => {
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
    formData.append('race', checkbox.join(','))
    formData.append('tags', data.tags.value)
    formData.append('description', data.description.value)
    
    if(data.files.files[0] === undefined){
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

    this.state = "edit";
  };
};