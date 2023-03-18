import InputSearch from '../inputSearch/index';
import Vkdialog from '../vkdialog/index';
// import TitleLogo from '../../assets/logo/KK_logo.png'
import TitleLogo from '../../assets/logo/KK_logo.gif'

import './style.css';

export default function Header(props) {
  return (
    <header>
      <div className="header_logo">
        <img src={TitleLogo} alt="Когитатор Коула"></img>
      </div>
      <div className="header_search">
        <InputSearch history={props.history}/>
      </div>
      <div className="header_vk">
        <Vkdialog history={props.history}/>
      </div>
      
    </header>
  )
}