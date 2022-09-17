import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MenuList from "./whMenuList/index";

import { inject, observer } from "mobx-react";
import Utils from '../utils';

export default inject('books', 'menufilter') (
  observer((props)=> {
  const [currentPage, setCurrentPage] = useState(1);
  
  const location = useLocation();
    
  const urlParams = new URLSearchParams(location.search);
  const pageId = urlParams.get('page');

  console.log(pageId);
  
  const utils = new Utils({
    books: props.books.books,
  });

  return (
    <div className="sidebar_container">
      <div className="sidebar_race_logo">
        LOGO
      </div>
      <div className="sidebar_menu">
      <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link 
                to={`/books?category=allbooks&page=${currentPage}`}
              >
                Все книги
              </Link>
            </li>
            <li>
              <MenuList 
                setPage={setCurrentPage}
                items="wh30k" 
                tittle={'Warhammer30k'} 
                books={props.books} 
                menufilter={props.menufilter} 
                utils={utils}
              />
            </li>
            <li>
              <MenuList 
                setPage={setCurrentPage}
                items="wh40k" 
                tittle={'Warhammer40k'} 
                books={props.books} 
                menufilter={props.menufilter} 
                utils={utils}
              />
            </li>
          </ul>
      </div>
    </div>
  )
}))