import React from "react";

import Header from "./header";
import Router from "./Router";
import "./style.css";


export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Router/>
    </div>
  );
}