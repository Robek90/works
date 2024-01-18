import React, { useState, useEffect }from "react";
import { inject, observer } from 'mobx-react';

import Card from "../../component/catalogCard/index";
import ShowAlert from "../../component/showAlert";
import Preloader from '../../component/preLoader/index';

import { useUrlParams } from "../../services/url/index";

import './style.css';

export default inject('catalog', 'category', 'product', 'shoppingCart') (
  observer((props) => {
    const [ alertCart, setAlertCart ] = useState();

    const [ product, setProduct ] = useState({});

    const [ shoppingCart, setShoppingCart ] = useState([]);

    const [ loading, setLoading ] = useState(false);

    const urlParams = useUrlParams();

    let pageLoading = () => {
      let filter = [];

      if(urlParams.catalog === null) {
        Object.values(product).forEach((i)=> {
          if(i.customId !== undefined) {
            filter.push(i)
          }
        })
        return filter
      } else {
        Object.values(product).forEach((i)=> {
          if(i.customRace === urlParams.catalog && i.name === urlParams.category) {
            filter.push(i)
          }
        })
        return filter
      }
    };

    useEffect(()=>{
      props.product.getProductData();
      
      setShoppingCart(props.shoppingCart);

      if(props.product.state === "done") {
        setLoading(true);
        props.product.productData.then(res => setProduct(res.product[0]));
      }
    },[props.product, props.product.state, props.shoppingCart])

    return (
      <section className="priceList_page">
        {
          props.shoppingCart.showAlert && 
          <ShowAlert 
            alert={alertCart} 
            data={props.shoppingCart}
            setAlert={setAlertCart}
            textAlert={"has been successfully added to the cart"}
            textError={"product is already in the cart"}
          />
        }
        <div className="priceList_news_container">
          <div className="priceList_news">
            НОВОСТИ РЕКЛАМА
          </div>
        </div>
        <div className="card_catalog_container">
          <ul className="card_catalog">
          {
              !loading ? (
                  <Preloader />
              ) : (
                pageLoading().map((i)=> {
                  return (
                    <Card 
                      cardData={i} 
                      shoppingCart={shoppingCart}
                      setAlert={setAlertCart} 
                    />
                  )
                })
              )
            }
          </ul>
        </div>
      </section>
    )
  })
)