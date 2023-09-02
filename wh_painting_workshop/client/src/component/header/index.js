import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import { actionButton } from "./actionButtonList";
import LanguagesButton from "./launguagesButton/index";

import { FormattedMessage } from "react-intl";

import './style.css';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header_tier1">
        {actionButton[0].map((item,index) => (
          <NavLink 
            key={index}
            className="sidebar_filter_button_Link"
            color="inherit"
            to={`/${props.currentLocale}`+item.path}
          >
            <FormattedMessage id={item.name} />
          </NavLink>
        ))}
      </div>
      <div className="header_tier2">
        Logo and search?
      </div>
      <div className="header_tier3">
        {actionButton[1].map((item,index) => (
          <NavLink 
            key={index}
            className="sidebar_filter_button_Link"
            color="inherit"
            to={`/${props.currentLocale}`+item.path}
          >
            <FormattedMessage id={item.name} />
          </NavLink>
        ))}
      </div>
      <LanguagesButton handleChange={props.handleChange} props={props}/>
    </header>
  )
}