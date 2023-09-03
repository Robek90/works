import React, { useState, useEffect }from "react";

import Header from "./component/header";
import Router from "./Router";

import "./style.css";


export default function App(props) {
  let [currentLocale, setCurrentLocale] = useState(localStorage.getItem('language'))
  let [languagePath, setLanguagePath] = useState('ru-RU');

  function handleClick() {
    setCurrentLocale(localStorage.getItem('language'))
  }

  useEffect(()=>{
    if(currentLocale === '"ru"') {
      setLanguagePath('ru-RU')
    } else {
      setLanguagePath('en-US')
    }
  },[currentLocale])

  return (
      <div className="wrapper">
        <Header history={props.history} languagePath={languagePath} handleClick={handleClick}/>
        <Router history={props.history} languagePath={languagePath}/>
      </div>
  );
}