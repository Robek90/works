import React, { useState } from "react";


export default function FormComponent(props) {
  const { reviewsAlert, setReviewsData, setAlert, t } = props;

  const [ reviews, setReviews ] = useState("");

  const [name, setName ] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeReview = (e) => {
    setReviews(e.target.value);
  };

  const onClick = () => {
    if( name === "") {
      setAlert("")
      reviewsAlert(true)
    } 
    if(reviews === "") {
      setAlert("")
      reviewsAlert(true)
    }
    if(name && reviews !== "") {
      setReviewsData({
        name: name,
        text: reviews
      })
      setAlert("review")
      setName("")
      setReviews("")
      reviewsAlert(true)
    }
  };

  return (
    <div className="form-container">
      <input
        className="reviews-form"
        type="text"
        placeholder={t("enter your name")}
        value={name}
        onChange={onChangeName}
      />
      <input
        className="reviews-form"
        type="text"
        placeholder={t("enter your reviews")}
        value={reviews}
        onChange={onChangeReview}
      />
      <button onClick={onClick} style={{ background: "Green" }}>
        {t("submit")}
      </button>
    </div>
  );
}