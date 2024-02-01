import React, { useState } from "react";
import { inject, observer } from "mobx-react";

import InputsForm from "./inputsForm";
import ShowAlert from "../../component/showAlert";

import { useTranslation } from 'react-i18next';

import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import getCurrentDate from "../../utils/getDate";
import './style.css';

export default inject('review') (
  observer((props)=>{
    const { review, getStatus, getNewStatus } = props;
    
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ reviewtext, setReviewtext ] = useState("");
    const [ alertreview, setAlertreview ] = useState("");

    const { t } = useTranslation();

    const onChangeName = (e) => {
      setName(e.target.value);
    };
  
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    }; 
  
  
    const onChangeReview = (e) => {
      setReviewtext(e.target.value);
    };

    const InputsFormButton = styled(Button)({
      width: "100px",
      height: "100px",
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: 'rgb(71, 124, 173)',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    });

    const onClick = () => {
      if( name === "") {
        setAlertreview("")
        review.setShowAlert(true)
      }
  
      if(review === "") {
        setAlertreview("")
        review.setShowAlert(true)
      }
  
      if(email === "") {
        setAlertreview("")
        review.setShowAlert(true)
      }
  
      if(name && review && email !== "") {
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
          review.setReviewData({
            name: name,
            email: email,
            text: reviewtext,
            date: getCurrentDate()
          })
          setAlertreview("review")
          setName("")
          setEmail("")
          setReviewtext("")
          review.setShowAlert(true)
          getNewStatus('hidden')
        } else {
          setAlertreview("")
        }
      }
    };

    return (
      <>
        {
          getStatus === 'success' && 
          <>
            {
              review.showAlert && 
              <ShowAlert 
                alert={alertreview} 
                data={review}
                setAlert={setAlertreview}
                textAlert={t("has been successfully added to the cart")}
                textError={t("form is empty please enter text")}
              />
            }
            <div className="form_container">
              <div className="form_inputs">
                <InputsForm
                  t={t}
                  name={name}
                  email={email}
                  reviewtext={reviewtext}
                  onChangeName={onChangeName}
                  onChangeEmail={onChangeEmail}
                  onChangeReview={onChangeReview}
                />
              </div>
              <div className="form_button">
                <InputsFormButton 
                  onClick={onClick}
                >
                    {t("submit")}
                </InputsFormButton>
              </div>
            </div>
            
          </>
        }
      </>
    );
}))