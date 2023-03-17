import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Pagination from '../../component/pagination/index';
import { inject, observer } from 'mobx-react';

import Filters from '../../utils/filtersService';
import { splitUrl } from '../../utils/common';
import { useGetUrlParams } from '../../services/url/index';

import LoadGear from '../../assets/loaders/load_gear.gif';
import './style.css';

let itemPerPage = 9;

export default inject('books') (
  observer((props) => {
    const [getBooksList, setGetBooksList] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const [currentPage, setCurrentPage] = useState(searchParams.get('page')||1);

    const [booksArray, setBooksArray] = useState([]);

    const filters = new Filters({
      books: getBooksList,
    });

    let location = useLocation();

    props.history.push(location);

    const urlParams = useGetUrlParams();

    const {categories, race, author, dateRealeased, dateContext, tags, isbn, search} = urlParams;

    let filteredTags = `${race || 'none'},${author || 'none'},${dateRealeased || 'none'},${dateContext || 'none'},${tags || 'none'}`;

    if(+searchParams.get('page') !== +currentPage){
      setCurrentPage(searchParams.get('page'));
    }
    
    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * itemPerPage;
      const lastPageIndex = firstPageIndex + itemPerPage;

      return booksArray.slice(firstPageIndex, lastPageIndex);
    }, [booksArray, currentPage]);

    useEffect(()=>{
      props.books.getBooksRequestData()
        .then(res=>setGetBooksList(res))
        .catch(error=>console.log(error))
    },[]);

    useMemo(()=>{
      if(search) {
        setBooksArray(filters.searchBooks(search));
      }
      if(categories) {
        setBooksArray(filters.getFilteredBooks(categories, splitUrl(filteredTags)));
      }
    },[getBooksList]);
    
    return (
      <div className="categories_container">
        {props.books.state === 'pending' ? 
        <div className="categories_loading">
          <img alt="Загрузка" src={LoadGear}/>
          <p>Вознесенние хвалы Омнисии</p>
        </div> :
        props.books.state === 'error' ? 
        <div className="categories_error">
          <p>
            Дух машины разгневан и не желает работать.<br />
            Попробуйте перезагрузить страницу. <br />
            Техножрецы уже проводят нужные ритуалы...
          </p>
        </div> :
        <>
          <div className="current_page">Страница {currentPage}</div>
          <div className="books">
            {currentTableData.map((item, index) => {
              return (
                <Link 
                  key={index}
                  to={`/book?isbn=${item.id}`}
                  onClick={()=> {
                    props.history.push(`/book?isbn=${item.id}`)
                  }}
                >
                  <div className="books_card">
                    <div className="books_img">
                      <img alt="" src={require(`../../assets/images/${item.img}`)}/>
                    </div>
                    <div className="books_text">
                      <div className="books_title">{item.title}</div>
                      <div className="books_author">Автор: {item.author}</div>
                      <div className="books_dateRealeased">издание: {item.dateRealeased}г.</div>
                      <div className="books_dateContext">миллениум: {item.dateContext}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
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
          </div>
        </>
        }
      </div>
    );
  }
))
  