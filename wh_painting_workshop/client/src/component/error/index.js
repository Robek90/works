import React from "react";
import { useRouteError } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import "./style.css"
export default function Error() {
  const { t } = useTranslation();

  const error = useRouteError();

  return (
    <div className="error_page">
      <h1>{t("Oops!")}</h1>
      <div className="error_content">
        <h2>{t("Sorry, an unexpected error has occurred.")}</h2>
        <p>{error.statusText || error.message}</p>
        <Button href="/">{t("main page")}</Button>
      </div>
    </div>
  );
}