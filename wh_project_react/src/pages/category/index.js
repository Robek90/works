import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from '../../component/pagination/index';
import { inject, observer } from 'mobx-react';

import Utils from '../../component/utils';
import './style.css';

let itemPerPage = 9;

export default inject('books', 'menufilter') (
  observer((props) => {
    let setMenu = props.menufilter.setMenu;
    let menufilter = props.menufilter.menufilter;
    let books = props.books.books;
    
    const [searchParams, setSearchParams] = useSearchParams();

    const [currentPage, setCurrentPage] = useState(searchParams.get('page')||1);

    const [booksArray, setBooksArray] = useState([]);

    let location = useLocation();
    props.history.push(location)

    let category = searchParams.get('category');
    let race = searchParams.get('race');

    const utils = new Utils({
      books: books,
    });
    console.log(utils);
    useMemo(()=>{
      switch (category) {
        case "allbooks":
          setBooksArray(books);
          break;
        case "wh30k":
          utils.menuFilterBooks([category,race], setMenu);
          setBooksArray(menufilter);
          console.log(menufilter);
          break;
        case "wh40k":
          utils.menuFilterBooks([category,race], setMenu);
          setBooksArray(menufilter);
          console.log(menufilter);
          break;
        default:
          break;
      }
    },[category, race])

    if(+searchParams.get('page') !== +currentPage){
      setCurrentPage(searchParams.get('page'));
    }
    
    const currentTableData = useMemo(() => {
      
      const firstPageIndex = (currentPage - 1) * itemPerPage;
      const lastPageIndex = firstPageIndex + itemPerPage;

      return booksArray.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, booksArray]);

    return (
      <>
        <div>Страница {currentPage}</div>
        <div className="books">
          {currentTableData.map(item => {
            return (
              <div className="books_card">
                <div className="books_img">
                  <img alt="" src={item.img}/>
                </div>
                <div>{item.id}</div>
                <div>{item.author}</div>
                <div>{item.tittle}</div>
                <div>{item.dateRealeased}</div>
                <div>{item.dateContext}</div>
              </div>
            );
          })}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={+searchParams.get('page')||1}
          totalCount={booksArray.length}
          pageSize={itemPerPage}
          onPageChange={page => {
            setCurrentPage(page);
            setSearchParams({ ...Object.fromEntries([...searchParams]), page });
          }}
        />
      </>
    );
  }
))
  