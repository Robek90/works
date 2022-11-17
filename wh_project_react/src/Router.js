import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Category from "./pages/category";
import Book from "./pages/Book";
import Admin from './pages/admin/index';

function AppRouter(props) {
  const [changePage, setChangePage] = useState(false);
  const [adminCommponent, setAdminCommponent] = useState(false);

  const routes = [
    adminCommponent ? {
      path: "/books",
      sidebar: (props) => <Sidebar {...props}/>,
      main: (props) => changePage ? <Book {...props}/> : <Category {...props}/>
    } : {
      path: "/books",
      sidebar: (props) => <Sidebar {...props}/>,
      main: (props) => <Admin {...props}/>
    }
  ];
  
  return (
    <>
      <div className="router_container">
        <div
          className="sidebar"
        >
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.sidebar history={props.history} setChangePage={setChangePage}/>}
              >
              </Route>
             ))}
          </Routes>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.main history={props.history} setChangePage={setChangePage}/>}
              />
            ))}
          </Routes>
        </div>
        <Routes>
            <Route
              path="/"
              element={<Navigate to="/books?category=allbooks&page=1" replace />}
            />
        </Routes>
      </div>
    </>
  )
}

export default AppRouter;