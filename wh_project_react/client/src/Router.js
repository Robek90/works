import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Book from "./pages/book";
import Admin from './pages/admin/index';
import Categories from "./pages/categories";

function AppRouter(props) {
  const routes = [
    {
      path: "/books",
      sidebar: (props) => <Sidebar {...props} />,
      main: (props) => <Categories {...props} />
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
                element={<route.sidebar history={props.history} />}
              />
             ))}
          </Routes>
        </div>
        <div 
          className="categories"
        >
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.main history={props.history} />}
              />
            ))}
            <Route
              path= "/"
              element={<Navigate to="/books?categories=allbooks&page=1" replace />}
            />
          </Routes>
          <Routes>
            <Route
              path="admin"
              element={<Admin to="/admin" />}
            />
            <Route
              path="book"
              element={<Book history={props.history} to="/book" />}
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AppRouter;