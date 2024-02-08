import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/aboutUs/index";
import News from "./pages/news/index";
import Exposition from "./pages/exposition/index";
import Reviews from "./pages/review/index";
import PriceList from "./pages/priceList/index";
import ShoppingCart from "./pages/shoppingCart/index";
import Sidebar from "./component/sidebarNavigation";
import ErrorPage from './component/error';
import Layout from './Layout';

function AppRouter(props) {
  let { history, languagePath, handleClick } = props;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout history={history} languagePath={languagePath} handleClick={handleClick}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <News history={history}/>,
        },
        {
          path: "news",
          element: <News history={history}/>,
        },
        {
          path: "exposition",
          element: [<Sidebar key={"sidebar"}/>, <Exposition key={"exposition"} history={history}/>],
        },
        {
          path: "reviews",
          element: <Reviews history={history}/>,
        },
        {
          path: "pricelist",
          element:  [<Sidebar key={"sidebar"}/>, <PriceList key={"pricelist"} history={history}/>],
        },
        {
          path: "shoppingcart",
          element: <ShoppingCart history={history}/>,
        },
        {
          path: "aboutus",
          element: <AboutUs history={history}/>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter;