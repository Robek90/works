import React, { useState, useMemo } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from '../../component/pagination/index';
import { inject, observer } from 'mobx-react';

import Filter from '../../utils/service';
import FiltersModalPage from '../../component/modal/index';
import { splitUrl } from '../../utils/common';
import './style.css';

let itemPerPage = 9;

export default inject('books') (
  observer((props) => {
    let books = props.books.books;
    
    const [searchParams, setSearchParams] = useSearchParams();

    const [currentPage, setCurrentPage] = useState(searchParams.get('page')||1);

    const [booksArray, setBooksArray] = useState([]);

    let location = useLocation();
    props.history.push(location)

    
    let category = searchParams.get('category');
    let race = searchParams.get('race');
    let tag = searchParams.get('tag');
    
    let filteredTags = `${category},${race || 'none'},${tag || 'none'}`;

    const filters = new Filter({
      books: books,
      filteredBooks: booksArray,
    });
    
    useMemo(()=>{
      switch (category) {
        case "allbooks":
          setBooksArray(filters.getFilteredBooks(splitUrl(filteredTags)));
          break;
        case "wh30k":
          setBooksArray(filters.getFilteredBooks(splitUrl(filteredTags)));
          break;
        case "wh40k":
          setBooksArray(filters.getFilteredBooks(splitUrl(filteredTags)));
          break;
        default:
          break;
      }
    },[category, race, tag])

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
        <FiltersModalPage 
          category={category}
          race={race}
          tag={tag}
          splitUrl={splitUrl}
          history={props.history}
        />
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
  