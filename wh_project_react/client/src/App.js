import React from "react";

import Header from "./component/header";
import Router from "./Router";
import "./style.css";


export default function App(props) {
  return (
    <div className="wrapper">
      <Header history={props.history}/>
      <Router history={props.history}/>
    </div>
  );
}