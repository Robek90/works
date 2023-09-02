import React, { useState, useEffect }from "react";
import { Link, useLocation} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../../trans/locales";

export default function LaunguagesButton(props) {
  let location = useLocation();

  const languages = [
    { name: "Русский", code: LOCALES.RUSSIAN },
    { name: "English", code: LOCALES.ENGLISH },
  ];

  return (
    <header>
      <div className="container header_content">
        <div className="switcher">
          <FormattedMessage id="languages" />{" "}
          <div >
            {languages.map(({ name, code }) => (
              <Link 
                key={code} 
                value={code} 
                onClick={()=>props.props.onClick(code)}
                to={`/${code}${location.pathname.slice(6)}`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};