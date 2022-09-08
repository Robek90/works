import React from "react";
import { Link } from "react-router-dom";

import MenuList from "./whMenuList/index";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_race_logo">
        LOGO
      </div>
      <div className="sidebar_menu">
      <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Все книги</Link>
            </li>
            <li>
              <MenuList items="wh30k" tittle={'Warhammer30k'}/>
            </li>
            <li>
              <MenuList items="wh40k" tittle={'Warhammer40k'}/>
            </li>
          </ul>
      </div>
    </div>
  )
}