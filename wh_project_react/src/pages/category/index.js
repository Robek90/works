import React, { useState, useMemo } from 'react';
import Pagination from '../../component/pagination/index';
import { inject, observer } from 'mobx-react';
import './style.css';

let itemPerPage = 9;
let data = [];

export default inject('books', 'menufilter') (
  observer((props) => {
    if(props.menufilter.menufilter.length === 0) {
      data = props.books.books;
    } else {
      data = props.menufilter.menufilter;
    }  

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * itemPerPage;
      const lastPageIndex = firstPageIndex + itemPerPage;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

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
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={itemPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </>
    );
  }
))
  