import React from 'react';

import { useTranslation } from 'react-i18next';

import './style.css';

export default function News(props) {
  const { t } = useTranslation();

  return (
    <div className="news_page">
      <div className="main_news">
        <div className="main_news_text_container">
          <p className="main_news_header_text">
            {t("welcome to our workshop")}
          </p>
          <p className="main_news_content_text"> 
            {t("the painting cooming soon")}
          </p>
        </div>
      </div>
    </div>
  )
}