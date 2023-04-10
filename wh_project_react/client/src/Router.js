import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Book from "./pages/book";
import Admin from './pages/admin/index';
import Categories from "./pages/categories";
import { getVerification } from './services/verification';

function AppRouter(props) {
  let [userVerification, setUserVerification] = useState(false);

  let location = useLocation();

  if(sessionStorage.length === 0) {
    sessionStorage.setItem('auth', 'false')
    sessionStorage.setItem('userInfo', JSON.stringify({'first_name': '', 'uid': ''}))
  };

  let stringData = sessionStorage.getItem('userInfo');
  let userInfo = JSON.parse(stringData);

  const routes = [
    {
      path: "/books",
      sidebar: (props) => <Sidebar {...props} />,
      main: (props) => <Categories {...props} />
    }
  ];

  const verification = () => {
    if(userVerification === true) {
      return (
        <>

          <Route
            path="/admin"
            element={<Admin history={props.history}/>}
          />
          <Route
            path= "/admin"
            element={<Navigate to="/admin?bookslist" replace />}
          />
        </>
      )
    } else {
      alert('Пожалуйста авторизируйтесь')
      return (
        <Route
          path="/admin"
          element={<Navigate to="/books?categories=allbooks&page=1" replace />}
        />
      )
    }
  };

  useEffect(()=>{
    getVerification(userInfo)
      .then(res=>setUserVerification(res))
      .catch(err=>console.log(err))
  },[location.pathname, userVerification, userInfo]);

  return (
    <>
      <div className="router_container">
        <div
          className={`${location.pathname !== "/books" ? "sidebar_none" : "sidebar"}`}
        >
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.sidebar history={props.history} />}
              />
             ))}
          </Routes>
        </div>
        <div 
          className={`categories ${location.pathname !== "/books" ? "" : "categories_flex"}`}
        > 
          <Routes>
            <>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.main history={props.history} />}
                />
                
              ))}
              <Route
                path="/"
                element={<Navigate to="/books?categories=allbooks&page=1" replace />}
              />
              <Route
                path="/books"
                element={<Navigate to="/books?categories=allbooks&page=1" replace />}
              />
              <Route
                path="/book"
                element={<Book history={props.history}/>}
              />
              {userVerification === true ? verification() : <></>}
            </>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AppRouter;