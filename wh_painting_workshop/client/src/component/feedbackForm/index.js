import React, { useState } from "react";
import { inject, observer } from "mobx-react";

import InputsForm from "./inputsForm";
import ShowAlert from "../../component/showAlert";

import { useTranslation } from 'react-i18next';

import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
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
            <div className="form_container">
              <div className="form_inputs">
                <InputsForm
                  t={t}
                  name={name}
                  email={email}
                  feedbacktext={feedbacktext}
                  onChangeName={onChangeName}
                  onChangeEmail={onChangeEmail}
                  onChangeFeedback={onChangeFeedback}
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