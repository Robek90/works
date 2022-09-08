import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Sidebar from "./sidebar";
import Category from "../pages/category";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Sidebar/>,
    main: () => <Category/>
  },
  {
    path: "/wh30K",
    sidebar: () => <Sidebar/>,
    main: () => <Category/>
  },
  {
    path: "/wh40k",
    sidebar: () => <Sidebar/>,
    main: () => <Category/>
  }
];

export default function AppRouter() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
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
    </Router>
  )
}