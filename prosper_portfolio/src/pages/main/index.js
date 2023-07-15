import Header from '../../component/header/index';
import Footer from '../../component/footer/index';
import './style.css';

export default function Main() {
  return (
    <div className="main">
      <Header/>
      <div className="main_container">
        Main
      </div>
      <Footer/>
    </div>
  )
}