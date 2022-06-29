import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Signup, Dashboard, Analytics, Invoice, Products, Sidebar } from '../pages/index';

import './style.css';

const routes = [
  {
    path: '/dashboard',
    sidebar: () => <Sidebar />,
    main: () => <Dashboard />,
  },
  {
    path: '/analytics',
    sidebar: () => <Sidebar />,
    main: () => <Analytics />,
  },
  {
    path: '/invoice',
    sidebar: () => <Sidebar />,
    main: () => <Invoice />,
  },
  {
    path: '/products',
    sidebar: () => <Sidebar />,
    main: () => <Products />,
  },
];

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup/" component={Signup} />
      </Switch>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.sidebar />
          </Route>
        ))}
      </Switch>
      <div className="workArea">
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.main />
            </Route>
          ))}
        </Switch>
      </div>
    </>
  );
}
// const location = useLocation();
// const path = location.pathname.slice(1, -1);

// return (
//   <>
//     {path === "" ?  null : path === "signup" ? null: <Sidebar/>}
//       <Switch>
//         <Route exact path="/" component={Login}/>
//         <Route path="/signup/" component={Signup}/>
//         <div className="workArea">
//           <Route path="/dashboard" component={Dashboard}/>
//           <Route path="/analytics" component={Analytics}/>
//           <Route path="/invoice" component={Invoice}/>
//           <Route path="/products" component={Products}/>
//         </div>
//       </Switch>
//   </>
// )

// export default App
