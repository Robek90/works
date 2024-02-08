import React from 'react';

import { useTranslation } from 'react-i18next';

import './style.css';

export default function News(props) {
  const { t } = useTranslation();

  return (
    <div className="news_page">
      <div className="mainNews">
        <div></div>
        <picture className="mainNewsPicture">
          <source media={"(min-width: 1200px)"} srcSet={require("../../assets/newsImg/mainNews1080.jpg")}/>
          <source media={"(min-width: 700px)"} srcSet={require("../../assets/newsImg/mainNews720.jpg")}/>
          <img src={require("../../assets/newsImg/mainNews720.jpg")} alt={`${t("Ooops... Let's use your imagination")}`}/>
        </picture>
        <div className="mainNewsTextContainer">
          <p className="mainNewsLargeText">
            {t("welcome to our workshop")}
          </p>
        </div>
      </div>
    </div>
  )
}