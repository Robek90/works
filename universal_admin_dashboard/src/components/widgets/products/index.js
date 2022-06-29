import React from 'react';
import Dots from '../../../assets/icon/MenuDots.svg';
import ImgStars from '../../../assets/image/Stars.png';
import { inject, observer } from 'mobx-react';

import './products.css';

export default inject('product')(
  observer((props) => {
    const product = props.product.products;
    console.log(product);
    return (
      <div className="productsContainer">
        <div className="productsHeader">
          <div className="productsTitle">Top selling Products</div>
          <img className="productsDots" src={Dots} alt=""></img>
        </div>
        <div className="productsContent">
          <div className="product_card card_1">
            <div className="card_img">
              <img src={product[0].img.Elbrus} alt=""></img>
            </div>
            <div className="card_content">
              <p className="card_title">{product[0].name}</p>
              <img src={ImgStars} alt=""></img>
              <p className="card_price">${product[0].price}</p>
            </div>
          </div>
          <div className="product_card">
            <div className="card_img">
              <img src={product[1].img.Marusy} alt=""></img>
            </div>
            <div className="card_content">
              <p className="card_title">{product[1].name}</p>
              <img src={ImgStars} alt=""></img>
              <p className="card_price">${product[1].price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  })
);
