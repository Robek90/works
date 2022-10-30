import React from 'react';
import { Link } from "react-router-dom";

import MenuList from "./whMenuList/index";


export default function inject(props) { 
  return (
    <div className="sidebar_container">
      <div className="sidebar_race_logo">
        LOGO
      </div>
      <div className="sidebar_menu">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link 
              to={`/books?category=allbooks&page=1`}
              onClick={()=>{
                props.history.push(`/books?category=allbooks&page=1`);
              }}
            >
              Все книги
            </Link>
          </li>
          <li>
            <MenuList 
              history={props.history}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}