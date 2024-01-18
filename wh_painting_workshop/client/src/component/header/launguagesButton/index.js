import React, { useState, useEffect }from "react";

import useLocalStorage from '../../../hooks/useLocalStorage';
import i18n from '../../../services/i18n';

export default function LaunguagesButton(props) {
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleLanguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('ru');
          setLanguage('ru');
      } else if (language === 'ru') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
      props.props.handleClick()
  };
  return (
    <>
      <div className="header_tier2_button_language">
        <div 
          className="header_tier2_button_language_text"
          onClick={handleLanguageChange}
        >
          {props.t("languages")}{' '}
          {language === 'ru' ? props.t('english') : props.t('russian')}
        </div>
      </div>
    </>
  );
};