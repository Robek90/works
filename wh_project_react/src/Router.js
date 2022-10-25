import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Sidebar from "./component/sidebar";
import Category from "./pages/category";

function AppRouter(props) {
  const routes = [
    {
      path: "/books",
      sidebar: (props) => <Sidebar {...props}/>,
      main: (props) => <Category {...props}/>
    },
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
                element={<route.sidebar history={props.history}/>}
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
                element={<route.main history={props.history}/>}
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