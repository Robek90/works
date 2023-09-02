import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Authorization from './pages/authorization/index';
import Contacts from "./pages/contacts/index";
import News from "./pages/news/index";
import ExampleWorks from "./pages/exampleWorks/index";
import Reviews from "./pages/reviews/index";
import PriceList from "./pages/priceList/index";
import ShoppingCarts from "./pages/shoppingCarts/index";


function AppRouter(props) {
  const routesPage = [
    {
      path: `/Authorization`,
      main: (props) => <Authorization {...props} />
    },
    {
      path: `/Contacts`,
      main: (props) => <Contacts {...props} />
    },
    {
      path: `/News`,
      main: (props) => <News {...props} />
    },
    {
      path: `/ExampleWorks`,
      main: (props) => <ExampleWorks {...props} />
    },
    {
      path: `/Reviews`,
      main: (props) => <Reviews {...props} />
    },
    {
      path: `/PriceList`,
      main: (props) => <PriceList {...props} />
    },
    {
      path: `/ShoppingCart`,
      main: (props) => <ShoppingCarts {...props} />
    },
  ];

  return (
    <>
      <div className="router_container">
        <div 
          className={'main_container'}
        > 
          <Routes>
            <>
              {routesPage.map((route, index) => (
                <Route
                  key={index}
                  path={`/${props.currentLocale+route.path}`}
                  element={<route.main history={props.history} />}
                />
                
              ))}
              <Route
                path="/"
                element={<Navigate to={`/${props.currentLocale}/News`} replace />}
              />
            </>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AppRouter;