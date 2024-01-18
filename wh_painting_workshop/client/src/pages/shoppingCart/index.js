import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";

import Button from '@mui/material/Button';

import Preloader from '../../component/preLoader/index';
import ShopCard from '../../component/shopCard/index';

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
      shoppingCart.deleteShoppingCartProduct([]);
    };
    
    useEffect(() => {
      setTotalSumm(calcTotalSumm(shoppingCart.shoppingCartData))
      setCartList(shoppingCart.shoppingCartData);
      setTotalQuantity(calcTotalQuantity(cartList));
      setLoading(true);
    }, [shoppingCart.shoppingCartData, cartList, totalSumm]);
    console.log(totalQuantity);
    return (
        <div className="shoppingCart_card">
          {
            !loading ? (
                <Preloader />
            ) : cartList.length ? (
              <>
                <div className="shoppingCart_card_tittle">
                  {t("shopping cart")}
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
                          setCartList={shoppingCart}
                          cardIndex={index}
                        />
                      ))
                    }
                  </div>
                  <div className="shoppingCart_card_widget">
                    <div className="shoppingCart_card_sticky">
                      <div className="shoppingCart_card_total">
                        <div className="shoppingCart_card_total_button_container">
                          <Button 
                            className="shoppingCart_card_total_button_order"
                            variant="contained"
                          >
                            {t("order payment")}
                          </Button>
                          <p>{t("Payment is made using a QR code")}</p>
                        </div>
                        <div className="shoppingCart_card_total_quantity">
                          <span>{t("your shopping cart")}</span> 
                          <span>{totalQuantity[0]} {t(totalQuantity[1])}</span>
                        </div>
                        <div className="shoppingCart_card_total_products_summ">
                          <span>{t("total summ")}</span>
                          <span>{totalSumm}₽</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
                <p className="shoppingCart_card_list_empty">
                  {t("empty cart")}
                </p>
            )
          }
        </div>
    )
  })
)
