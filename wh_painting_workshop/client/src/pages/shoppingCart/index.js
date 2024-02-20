import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Button from '@mui/material/Button';

import Preloader from '../../component/preLoader/index';
import ShopCard from '../../component/shopCard/index';
import SendEmailForm from "../../component/sendEmailForm";

import { calcTotalSumm, calcTotalQuantity } from "../../services/cartAction";
import { useTranslation } from 'react-i18next';

import './style.css';

export default inject('shoppingCart') (
  observer((props)=>{
    let { shoppingCart } = props;

    const [ cartList, setCartList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ totalSumm, setTotalSumm ] = useState(0);
    const [ totalQuantity, setTotalQuantity ] = useState([]);

    const { t } = useTranslation();

    const handleClickDeleteAll = () => {
      shoppingCart.changeShoppingCart([]);
    };

    useEffect(() => {
      setTotalSumm(calcTotalSumm(shoppingCart.shoppingCartData))
      setCartList(shoppingCart.shoppingCartData);
      setTotalQuantity(calcTotalQuantity(cartList));
      setLoading(true);
    }, [shoppingCart.shoppingCartData, cartList, totalSumm]);

    return (
      <div className="shoppingCart_card">
        {
          !loading ? (
              <Preloader />
          ) : cartList.length ? (
            <>
              <div className="shoppingCart_card_tittle">
                <h2>{t("shopping cart")}</h2>
                <p>{totalQuantity[0]}</p>
              </div>
              <div className="shoppingCart_card_clearCart">
                <Button 
                  variant="text"
                  className="shoppingCart_card_total_button_deleteAll"
                  onClick={()=>{
                    handleClickDeleteAll()
                  }}
                >
                  {t("delete all")}
                </Button>
              </div>
              <div className="shoppingCart_card_content">
                <div className="shoppingCart_card_list">
                  {
                    cartList.map((item, index) => (
                      <ShopCard 
                        key={index} 
                        card={item}
                        cartList={cartList}
                        shoppingCart={shoppingCart}
                        cardIndex={index}
                      />
                    ))
                  }
                </div>
                <div className="shoppingCart_card_widget">
                  <div className="shoppingCart_card_sticky">
                    <div className="shoppingCart_card_total">
                      <div className="shoppingCart_card_total_modal">
                        <SendEmailForm totalSumm={totalSumm} t={t}/>
                      </div>
                      <div className="shoppingCart_card_total_quantity">
                        <div className="shoppingCart_card_total_quantity_top">
                          <span>{t("your")} </span> 
                          <span>{t("shopping cart")}:</span>
                        </div>
                        <span>{t(totalQuantity[1])} ({totalQuantity[0]})</span>
                      </div>
                      <div className="shoppingCart_card_total_products_summ">
                        <span>{t("total summ")}:</span>
                        <span>{totalSumm}₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="shoppingCart_card_list_empty">
              <p className="shoppingCart_card_list_empty_text">
                {t("empty cart")}
              </p>
              <Link className="shoppingCart_card_list_empty_link" to="/pricelist">{t("Start painting your army.")}</Link>
            </div>
          )
        }
      </div>
    )
  })
)