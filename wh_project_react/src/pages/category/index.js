import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from '../../component/pagination/index';
import { inject, observer } from 'mobx-react';
import './style.css';

let itemPerPage = 9;
let data = [];

export default inject('books', 'menufilter') (
  observer((props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [currentPage, setCurrentPage] = useState(searchParams.get('page')||1);

    let location = useLocation();
    props.history.push(location)

    if(props.menufilter.menufilter.length === 0) {
      data = props.books.books;
    } else {
      data = props.menufilter.menufilter;
    }  

    const currentTableData = useMemo(() => {
      setCurrentPage(searchParams.get('page'));

      const firstPageIndex = (currentPage - 1) * itemPerPage;
      const lastPageIndex = firstPageIndex + itemPerPage;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, searchParams]);

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
          totalCount={data.length}
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
  