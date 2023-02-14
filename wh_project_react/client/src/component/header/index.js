import InputSearch from '../inputSearch/index'

import './style.css';

export default function Header(props) {
  return (
    <header>
      <div className="header_logo">
        Когитатор Коула
      </div>
      <div className="header_search">
        <InputSearch history={props.history}/>
      </div>
      <div className="header_vk">
        <div id="vk_auth"></div>
      </div>
    </header>
  )
}