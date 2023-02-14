import { makeAutoObservable } from 'mobx';

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

      return data
    } catch (e) {
      this.setState("error")
    }
  };
  
  sendNewBooksData = async () => {
    let url = '/newBook';
    const response =  await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: 20,
          title: "мстительный дух",
          author: ["Гремм Макнилл"],
          dateRealeased: ["2014"],
          dateContext: ["32000"],
          categories: ["allbooks", "wh40k"],
          race: ["imperium", "chaos"],
          tags: ["horus", "horus_heresy"],
        }
      )
    });

    const responseText = await response.text();

    console.log(responseText);
  };

  setBooks = (data) => {
    this.books = data
  };

  setState = (data) => {
    this.state = data
  };
};