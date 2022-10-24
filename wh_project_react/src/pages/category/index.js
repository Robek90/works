import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from '../../component/pagination/index';
import { inject, observer } from 'mobx-react';
import './style.css';

let itemPerPage = 9;
let data = [];

export default inject('books', 'menufilter') (
  observer((props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('category'));
    const [currentPage, setCurrentPage] = useState(1);

    let location = useLocation()
    let urlParams = new URLSearchParams(location.search);
    let category = urlParams.get('category')
    let race = urlParams.get('race')
    let urlSearch;
    // if(race !== null) {
    //   urlSearch = `?category=${category}&race=${race}`;
    // } else {
    //   urlSearch = `?category=${category}`;
    // };

    

    // useMemo(()=>{
    //   props.history.listen(() => {
    //     let urlParams = new URLSearchParams(props.history.location.search);
    //     let pageId = urlParams.get('page')
    //     console.log(pageId);
    //   })
    // },[props.history])

    
    // const locationPage = {
    //   pathname: '/books',
    //   search: `${urlSearch}&page=${currentPage}`,
    // };
    
    // props.history.push(locationPage)

    if(props.menufilter.menufilter.length === 0) {
      data = props.books.books;
    } else {
      data = props.menufilter.menufilter;
    }  

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * itemPerPage;
      const lastPageIndex = firstPageIndex + itemPerPage;
      const getDataSlice = data.slice(firstPageIndex, lastPageIndex)
      if(getDataSlice === []) {
        setCurrentPage(1)
      } else {
        return data.slice(firstPageIndex, lastPageIndex);
      }
    }, [data, currentPage]);

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
  