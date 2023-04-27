import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import BooksFilters from '../../booksfilters/index';

export default inject('books') (
  observer((props) => {
    const [getBooksList, setGetBooksList] = useState([]);

    let filters= {
      categories: [],
      race: [],
      author: [],
      dateRealeased: [],
      dateContext: [],
      tags: [],
    };

    getBooksList.forEach((item) => {
      item.categories.forEach((elem) => filters.categories.push(elem));
      item.race.forEach((elem) => filters.race.push(elem));
      item.author.forEach((elem) => filters.author.push(elem));
      item.dateRealeased.forEach((elem) => filters.dateRealeased.push(elem));
      item.dateContext.forEach((elem) => filters.dateContext.push(elem));
      item.tags.forEach((elem) => filters.tags.push(elem));
    });

    useEffect(()=>{
      props.books.getBooksRequestData();

      if(props.books.books.length === undefined) {
        props.books.books
        .then(res=>{
          if(props.books.state === 'done') {
            setGetBooksList(res);
          }
        })
        .catch(error=>console.log(error))
      }
    },[props.books.state]);

    return (
      <>
        {props.books.state === 'pending' ? <div className="categories_loading">загрузка Данных</div> :
          <BooksFilters
            filters={filters}
            history={props.history}
          />
        }
      </>
    );
  })
)