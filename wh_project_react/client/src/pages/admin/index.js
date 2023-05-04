import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import BookDialog from '../../component/bookdialog/index';

import './style.css';

export default inject('books') (
  observer((props) => {
    const [booksList, setGetBooksList] = useState([]);

    let location = useLocation();
    
    props.history.push(location);

    const handleDelete = (index) => {
      props.books.sendDeleteBookData(index+1);
    };

    useEffect(()=>{
      props.books.getBooksRequestData();

      if(props.books.books.length === undefined) {
        props.books.books
          .then(res=>setGetBooksList(res))
          .catch(error=>console.log(error))
      }
    },[props.books.state]);

    return (
      <>
        <div className="admin_panel">
          <BookDialog 
            className="admin_book_add"
            history={props.history}
            title={"добавить книгу"}
            variant={"outlined"}
            booksList={booksList}
          />
          <div className="admin_books">
            {booksList.map((item, index) => {
              return (
                <div 
                  key={index} 
                  className="book_card"
                >
                  <div className="book_img">
                    <img alt="" src={require(`../../assets/images/${item.img}`)}/>
                  </div>
                  <div className="book_text">
                    <div className="book_title">{item.title}</div>
                    <div className="book_author">Автор: {item.author}</div>
                    <div className="book_dateRealeased">издание: {item.dateRealeased}г.</div>
                  </div>
                  <div className="book_button">
                    <NavLink
                      className="admin_book_link_delete"
                      to={`/admin?bookslist=${booksList.length-1}`}
                      onClick={()=>{
                        handleDelete(index);
                        props.history.push(`/admin?bookslist=${booksList.length-1}`);
                      }}
                    >
                      удалить
                    </NavLink>
                    <BookDialog 
                      className="admin_book_edit"
                      title={"редактировать"}
                      variant={""}
                      history={props.history}
                      booksList={booksList}
                      bookItem={item}
                      bookIndex={index}
                    >
                      редактировать
                    </BookDialog>
                  </div>
                </div>
              );
            })}
          </div>
        </div> 
      </>
    )
  })
)