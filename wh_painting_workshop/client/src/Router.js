import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/index";
import Contacts from "./pages/contacts/index";
import News from "./pages/news/index";
import ExampleWorks from "./pages/exampleWorks/index";
import Feedback from "./pages/feedback/index";
import PriceList from "./pages/priceList/index";
import ShoppingCart from "./pages/shoppingCart/index";
import Sidebar from "./component/sidebarNavigation/index";

function AppRouter(props) {
  const sidebarPage = [
    {
      path: `/ExampleWorks`,
      sidebar: (props) => <Sidebar {...props}/>,
      main: (props) => <ExampleWorks {...props} />
    },
    {
      path: `/PriceList`,
      sidebar: (props) => <Sidebar {...props}/>,
      main: (props) => <PriceList {...props} />
    },
  ]
  const routesPage = [
    {
      path: `/AboutUs`,
      main: (props) => <AboutUs {...props} />
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
      path: `/Feedback`,
      main: (props) => <Feedback {...props} />
    },
    {
      path: `/ShoppingCart`,
      main: (props) => <ShoppingCart {...props} />
    },
  ];

  return (
    <div className="main_container">
      <Routes>
        {sidebarPage.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.sidebar history={props.history} />}
          />
          ))}
      </Routes>
      <Routes>
          {sidebarPage.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.main history={props.history} />}
            />
            
          ))}
      </Routes>
      <Routes>
        {routesPage.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.main history={props.history} languagePath={props.languagePath}/>}
          />
        ))}
        <Route
          path="/"
          element={<Navigate to={`/News`} replace />}
        />
      </Routes>
    </div>
  )
}

export default AppRouter;