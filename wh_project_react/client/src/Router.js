import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Book from "./pages/book";
import Admin from './pages/admin/index';
import Categories from "./pages/categories";
/*
  1) Если я в адресную строку, пишу /admin
  в роутере будет условие, if (route === 'admin') {
      сделать редирект на порт с запущенной nodejs, например    
      localhost:1234/admin (ну естественно в приложении сервера, тоже должен быть такой роут, типа app.get('admin.... 

  2) отправлять вместе с редиректом параметр
  будущий локалстораж
  )
      authorized: true,
      name: stas,
      email
  )

  3) на сервере проверять, а если ли такой пользователь у меня в БД (но если ее нету то просто заведи где нибудь, в отдельном файле переменную с пользователями-админами)
*/
function AppRouter(props) {
  let location = useLocation();

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
          </Routes>
          <Routes>
            <Route
              path="/admin"
              element={<Admin history={props.history}/>}
            />
            <Route
              path= "/admin"
              element={<Navigate to="/admin?bookslist" replace />}
            />
            <Route
              path="/book"
              element={<Book history={props.history}/>}
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default AppRouter;