import React, { useState, useEffect }from "react";

import useLocalStorage from '../../../hooks/useLocalStorage';
import i18n from '../../../services/i18n';

export default function LaunguagesButton(props) {
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleLenguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('ru');
          setLanguage('ru');
      } else if (language === 'ru') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };
  return (
    <div className="container header_content">
      <button onClick={handleLenguageChange}>
              {props.t("languages")}{' '}
              {language === 'ru' ? props.t('english') : props.t('russian')}
          </button>
          <button className='reload' onClick={() => window.location.reload()}>
              {props.t('refresh page')}
          </button>
    </div>
  );
};