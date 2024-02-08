import { useTranslation } from 'react-i18next';

import './style.css';

export default function AboutUs(props) {
  const { t } = useTranslation();

  return (
    <div className="aboutUs_page">
      <div className="aboutUs_page_contact">
        <h3>{t('contacts')}</h3>
        <p className="aboutUs_page_text">{t("Do you have any rewievs or suggestions about WarhammerWorkshop?")}<br/>{t("We are open to conversation and are waiting for your rewievs.")}</p>
        <ul className="aboutUs_page_list">
          <li>E-mail: <a href="mailto: tazz90@mail.ru">tazz90@mail.ru</a></li>
          <li>Telegram: <a href="https://t.me/GreatRussianCthulhu">https://t.me/GreatRussianCthulhu</a></li>
          <li>VK: <a href="https://vk.com/robek">https://vk.com/robek</a></li>
        </ul>
      </div>
    </div>
  )
}