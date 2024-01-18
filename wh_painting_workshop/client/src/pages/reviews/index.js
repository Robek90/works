import React, { useState, useEffect }from "react";
import { inject, observer } from "mobx-react";

import ReviewsForm from "../../component/reviewsForm/index";
import ShowAlert from "../../component/showAlert";
import Preloader from '../../component/preLoader/index';

import { useTranslation } from 'react-i18next';

import './style.css';

export default inject('reviews') (
  observer((props)=>{
    const { reviews } = props;

    const [ loading, setLoading ] = useState(false);

    const [ alertReviews, setAlertReviews ] = useState("");

    const [ reviewsList, setreviewsList ] = useState([]);

    const { t } = useTranslation();

    useEffect(() => {
      setreviewsList(reviews.reviewsData);
      setLoading(true);
    }, [reviews.reviewsData]);

    return (
      <div className="reviews_page">
        {
          reviews.showAlert && 
          <ShowAlert 
            alert={alertReviews} 
            data={reviews}
            setAlert={setAlertReviews}
            textAlert={t("has been successfully added to the cart")}
            textError={t("form is empty please enter text")}
          />
        }
        <ReviewsForm 
          setAlert={setAlertReviews}
          reviewsAlert={reviews.setShowAlert} 
          setReviewsData={reviews.setReviews}
          t={t}
        />
        {
            !loading ? (
                <Preloader />
            ) : reviewsList.length ? (
              reviewsList.map((item, index)=>{
                return (
                  <div className="row" key={index}>
                    <div className="reviews">{item.name}</div>
                    <div className="reviews">{item.text}</div>
                  </div>
                )
              })
            ) : (
                <p>{t("no reviews")}</p>
            )
          }
      </div>
    )
  })
)
