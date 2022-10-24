import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Utils from '../utils';
import MenuList from "./whMenuList/index";


export default inject('books', 'menufilter') (
  observer((props)=> { 
    // const [pageId, setPageId] = useState();

    // let locationUrl = useLocation()

    // useMemo(()=>{
    //   let urlParams = new URLSearchParams(locationUrl.search);
    //   setPageId(urlParams.get('page'))
    // },[props.history])

    const utils = new Utils({
      books: props.books.books,
    });

    // const location = {
    //   pathname: '/books',
    //   search: `?category=allbooks&page=1`,
    // }

    return (
      <div className="sidebar_container">
        <div className="sidebar_race_logo">
          LOGO
        </div>
        <div className="sidebar_menu">
        <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link 
                  to={
                    {pathname: '/books', search: `?category=allbooks`}
                  }
                  // onClick={()=>{
                  //   props.menufilter.setMenu([]);
                  //   props.history.push(location)
                  // }}
                >
                  Все книги
                </Link>
              </li>
              <li>
                <MenuList 
                  items="wh30k" 
                  tittle={'Warhammer30k'} 
                  history={props.history}
                  books={props.books} 
                  menufilter={props.menufilter} 
                  utils={utils}
                />
              </li>
              <li>
                <MenuList 
                  items="wh40k" 
                  tittle={'Warhammer40k'} 
                  history={props.history}
                  books={props.books} 
                  menufilter={props.menufilter} 
                  utils={utils}
                />
              </li>
            </ul>
        </div>
      </div>
    )
  }
))