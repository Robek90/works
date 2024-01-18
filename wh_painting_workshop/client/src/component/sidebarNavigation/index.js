import React from 'react';
import AccordionMenuList from "./accordion/index.js";

import './style.css';

export default function Sidebar(props) {
  return (
    <section className="sidebar_navigation">
      <AccordionMenuList/>
    </section>
  )
}