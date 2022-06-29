import React from 'react';
import SaveP from '../../../assets/icon/SaveProducts.jpg';
import StockP from '../../../assets/icon/StockProducts.jpg';
import SalesP from '../../../assets/icon/SalesProducts.jpg';
import JobA from '../../../assets/icon/JobAplication.jpg';

import './shortcuts.css';

const Shortcuts = () => (
  <div className="shortContainer">
    <div className="shortcuts">
      <div className="content">
        <div className="imgContent">
          <img src={SaveP} alt="" />
        </div>
        <div className="textContent">
          <p className="numberContainer">178+</p>
          <p className="textContainer">Save Products</p>
        </div>
      </div>
    </div>
    <div className="shortcuts">
      <div className="content">
        <div className="imgContent">
          <img src={StockP} alt="" />
        </div>
        <div className="textContent">
          <p className="numberContainer">20+</p>
          <p className="textContainer">Stock Products</p>
        </div>
      </div>
    </div>
    <div className="shortcuts">
      <div className="content">
        <div className="imgContent">
          <img src={SalesP} alt="" />
        </div>
        <div className="textContent">
          <p className="numberContainer">190+</p>
          <p className="textContainer">Sales Products</p>
        </div>
      </div>
    </div>
    <div className="shortcuts">
      <div className="content">
        <div className="imgContent">
          <img src={JobA} alt="" />
        </div>
        <div className="textContent">
          <p className="numberContainer">12+</p>
          <p className="textContainer">Job Application</p>
        </div>
      </div>
    </div>
  </div>
);

export default Shortcuts;
