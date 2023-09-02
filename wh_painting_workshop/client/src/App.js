import React, { useState }from "react";

import Header from "./component/header";
import Router from "./Router";

import { IntlProvider } from "react-intl";
import { LOCALES } from "./trans/locales"
import { messages } from "./trans/messages"

import "./style.css";


export default function App(props) {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  // if(props.history.location.pathname.slice(0,6) === "en-US") {
  //   localStorage.setItem("locale", "en-US")
  // } else {
  //   localStorage.setItem("locale", "ru-RU")
  // }

  const onClick = (e) => {
    console.log(e);
    setCurrentLocale(e);
    localStorage.setItem("locale", e);
  };

  function getInitialLocal() {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.RUSSIAN;
  }

  return (
    <IntlProvider 
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <div className="wrapper">
        <Header history={props.history} currentLocale={currentLocale} onClick={onClick}/>
        <Router history={props.history} currentLocale={currentLocale}/>
      </div>
    </IntlProvider>
  );
}