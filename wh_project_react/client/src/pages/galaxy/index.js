import React from 'react';
import {Link} from "react-router-dom";

export default function Galaxy(props) {
  return (
      <Link 
        to={`/galaxy`}
      >
        Галактика
      </Link>
  )
}