import React from "react";

import Header from "./component/header";
import Router from "./Router";
import "./style.css";


export default function App(props) {
  return (
    <div className="wrapper">
      <Header/>
      <Router history={props.history}/>
    </div>
  );
}