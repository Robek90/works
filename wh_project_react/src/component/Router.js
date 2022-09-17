import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import history from "../utils/history";

import Sidebar from "./sidebar";
import Category from "../pages/category";

export default function AppRouter() {
  const routes = [
    {
      path: '/books',
      exact: true,
      sidebar: () => <Sidebar/>,
      main: () => <Category/>
    },
  ];

  return (
    <Router
      history={history}>
      <div className="router_container">
        <div
          className="sidebar"
        >
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              >
              </Route>
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
      <Redirect to={`/books?category=allbooks&page=1`} />
    </Router>
    
  )
}