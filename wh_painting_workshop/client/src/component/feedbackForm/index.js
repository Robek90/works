import React, { useState } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import ShowAlert from "../../component/showAlert";

import { useTranslation } from 'react-i18next';

import './style.css';

export default inject('feedback') (
  observer((props)=>{
    const { feedback, getStatus, getNewStatus } = props;
    
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ feedbacktext, setFeedbacktext ] = useState("");
    const [ alertfeedback, setAlertfeedback ] = useState("");

    const { t } = useTranslation();

    const onChangeName = (e) => {
      setName(e.target.value);
    };
  
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    }; 
  
  
    const onChangeFeedback = (e) => {
      setFeedbacktext(e.target.value);
    };
  
    const onClick = () => {
      if( name === "") {
        setAlertfeedback("")
        feedback.setShowAlert(true)
      }
  
      if(feedback === "") {
        setAlertfeedback("")
        feedback.setShowAlert(true)
      }
  
      if(email === "") {
        setAlertfeedback("")
        feedback.setShowAlert(true)
      }
  
      if(name && feedback && email !== "") {
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
          feedback.setFeedback({
            name: name,
            email: email,
            text: feedbacktext
          })
          setAlertfeedback("feedback")
          setName("")
          setEmail("")
          setFeedbacktext("")
          feedback.setShowAlert(true)
          getNewStatus('hidden')
        } else {
          setAlertfeedback("")
        }
      }
    };
    
    return (
      <>
        {
          getStatus === 'success' && 
          <>
            {
              feedback.showAlert && 
              <ShowAlert 
                alert={alertfeedback} 
                data={feedback}
                setAlert={setAlertfeedback}
                textAlert={t("has been successfully added to the cart")}
                textError={t("form is empty please enter text")}
              />
            }
            <div className="form-container">
              <input
                className="feedback-form"
                type="text"
                placeholder={t("enter your name")}
                value={name}
                onChange={onChangeName}
              />
              <input
                className="feedback-form"
                type="text"
                placeholder={t("enter your Email")}
                value={email}
                onChange={onChangeEmail}
              />
              <input
                className="feedback-form"
                type="text"
                placeholder={t("enter your feedback")}
                value={feedbacktext}
                onChange={onChangeFeedback}
              />
              <Link onClick={onClick}>
                  {t("submit")}
              </Link>
            </div>
          </>
        }
      </>
    );
}))