import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./component/sidebarNavigation";
import Header from "./component/header";

const Layout = (props) => {
  let { history, languagePath, handleClick } = props;
  
  return (
    <>
      <Header history={history} languagePath={languagePath} handleClick={handleClick}/>
      <div className="main_container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;