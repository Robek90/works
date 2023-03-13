import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import AddBook from '../../component/addbook/index';

import './style.css';

export default inject('books') (
  observer((props) => {
    const [getBooksList, setGetBooksList] = useState([]);

    let location = useLocation();
    props.history.push(location);

    useEffect(()=>{
      props.books.getBooksRequestData()
        .then(res=>setGetBooksList(res))
        .catch(error=>console.log(error))
    },[]);

    return (
      <>
        <AddBook/>
        <div className="admin_books">
            {getBooksList.map((item, index) => {
              return (
                <div key={index} className="books_card">
                  <div className="books_img">
                    <img alt="" src={require(`../../assets/images/${item.img}`)}/>
                  </div>
                  <div className="books_text">
                    <div className="books_title">{item.title}</div>
                    <div className="books_author">Автор: {item.author}</div>
                    <div className="books_dateRealeased">издание: {item.dateRealeased}г.</div>
                  </div>
                </div>
              );
            })}
            {/* <Pagination
            className="pagination-bar"
            currentPage={+searchParams.get('page')||1}
            totalCount={booksArray.length}
            pageSize={itemPerPage}
            onPageChange={page => {
              setCurrentPage(page);
              setSearchParams({ ...Object.fromEntries([...searchParams]), page });
            }}
          /> */}
          </div>
      </>
    )
  })
)