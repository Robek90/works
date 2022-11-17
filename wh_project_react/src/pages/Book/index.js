import React from 'react';
import { useSearchParams } from "react-router-dom";
import { inject, observer } from 'mobx-react';

import './style.css';

export default inject('books') (
  observer((props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const isbn = searchParams.get('isbn');

    if(isbn) {
      props.setChangePage(true)
    };

    let book = props.books.books.filter(item => item.id === isbn);

    return (
      <>
        <button
          onClick={()=> {
            props.history.back();
            props.setChangePage(false)
          }}
        > Назад 
        </button>
        {book.map(item=>
          <div className="book_container">
            <div className="book_img">
              <img alt="" src={item.img}/>
            </div>
            <div className="book_text">
              <div className="book book_title">Название: <span>{item.title}</span></div>
              <div className="book book_author">Автор: <span>{item.author}</span></div>
              <div className="book book_release">Дата выхода: <span>{item.dateRealeased}</span></div>
              <div className="book book_context">Дата событий: <span>{item.dateContext}</span></div>
              <div className="book book_isbn">Номер в каталоге ISBN: <span>{item.id}</span></div>
              <div className="book book_description">Описание: <span>{item.description}</span></div>
            </div>
          </div>
        )}
      </>
    )
  })
)