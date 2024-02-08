import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>

      <div>
        <h2>Sorry, an unexpected error has occurred.</h2>
        <p>{error.statusText || error.message}</p>
        <Link to="/">home</Link>
      </div>
    </div>
  );
}