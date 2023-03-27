import React from 'react';
import { NavLink } from "react-router-dom";

import MenuList from "./whMenuList/index";
import './style.css';

export default function Sidebar(props) { 
  return (
    <div className="sidebar_container">
      <div className="sidebar_menu">
        <ul className="sidebar_list">
          <li className="sidebar_main_button_container">
            <NavLink 
              className="sidebar_main_button_link"
              to={`/books?categories=allbooks&page=1`}
              onClick={()=>{
                props.setChangePage(false)
                props.history.push(`/books?categories=allbooks&page=1`);
              }}
            >
              Главная
            </NavLink>
          </li>
          <li className="sidebar_filters_container">
            <MenuList 
              setChangePage={props.setChangePage}
              history={props.history}
              filterTag={'categories'}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}