import React from 'react';
import imgBoxBlue from '../../../assets/image/blueBox.svg';
import imgBoxYellow from '../../../assets/image/yellowBox.svg';

import './total.css';

const Total = () => (
  <div className="totalContainer">
    <div className="totalContent">
      <div className="total_card left">
        <div className="total_img">
          <img src={imgBoxBlue} alt=""></img>
        </div>
        <div className="content">
          <p className="total_title">Total Product</p>
          <p className="total_price">500,874</p>
        </div>
        <div className="info_text">
          <p className="text">+1400 New Added</p>
        </div>
      </div>
    </div>
    <div className="totalContent">
      <div className="total_card right">
        <div className="total_img">
          <img src={imgBoxYellow} alt=""></img>
        </div>
        <div className="content">
          <p className="total_title">Total Product</p>
          <p className="total_price">234,888</p>
        </div>
        <div className="info_text">
          <p className="text">+1000 Sales Today</p>
        </div>
      </div>
    </div>
  </div>
);

export default Total;
