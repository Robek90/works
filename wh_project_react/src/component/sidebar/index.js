import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MenuList from "./whMenuList/index";

import { inject, observer } from "mobx-react";
import Utils from '../utils';

export default inject('books', 'menufilter') (
  observer((props)=> {
  
  const location = useLocation();
    
  const urlParams = new URLSearchParams(location.search);
  let pageId = urlParams.get('page');

  // if (pageId === null) {
  //   pageId = 1
  // }
  
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
                to={`?category=allbooks&page=${pageId}`}
                onClick={()=>{props.menufilter.setMenu([])}}
              >
                Все книги
              </Link>
            </li>
            <li>
              <MenuList 
                items="wh30k" 
                tittle={'Warhammer30k'} 
                books={props.books} 
                menufilter={props.menufilter} 
                utils={utils}
              />
            </li>
            <li>
              <MenuList 
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