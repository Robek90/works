import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { inject, observer } from "mobx-react";
import InputsForm from "./inputsForm";
import i18n from '../../services/i18n';

import { useTranslation } from 'react-i18next';

import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import getCurrentDate from "../../utils/getDate";
import { getCaptchaRequest } from '../../services/captchaReq';

import './style.css';

let REACT_APP_SITE_KEY = "6Ldk9mspAAAAAOjDmxibcUwNQb5rer4OzpG-SWlw";

export default inject('review') (
  observer((props)=>{
    const { review } = props;

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ reviewtext, setReviewtext ] = useState("");
    const [ message, setMessage] = useState("");
    const [ error,setError] = useState("");
    const [captchaLanguage, setCaptchaLanguage] = useState(i18n.language);
    const [recaptchaKey, setRecaptchaKey] = useState(0);

    const captchaRef = useRef(null);

    const { t } = useTranslation();

    const verifyToken = (token) => {
      return getCaptchaRequest(token);
    };

    const handleSubmit  = async e => {
      e.preventDefault();
      setError('');
      setMessage('');
      if(name && email && reviewtext) {
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
          let token = captchaRef.current.getValue();
          if(token) {
            let valid_token = await verifyToken(token);
            if(valid_token.success) {
              review.setReviewData({
                name: name,
                email: email,
                text: reviewtext,
                date: getCurrentDate()
              })
              setName("")
              setEmail("")
              setReviewtext("")
              review.setShowAlert(true)
              setMessage(t("Hurray!! You have submitted review."));
            }
          } else {
            setError(t("You must confirm you are not a robot."));
          }
        } else {
          setError(t("Enter the correct email address."));
        }
      } else {
        setError(t("Please fill in all form."));
      }
    };

    const InputsFormButton = styled(Button)({
      width: "100px",
      height: "100px",
      textTransform: 'uppercase',
      fontSize: 14,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      color: 'white',
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
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
    
    useEffect(() => {
      setCaptchaLanguage(i18n.language);
      setRecaptchaKey((prevKey) => prevKey + 1);
      captchaRef.current.reset();
    }, [i18n.language]);

    return (
      <>
        <form onSubmit={handleSubmit} className="captch_form_container">
          <div className="captch_form_inputs">
            <InputsForm
              t={t}
              name={name}
              email={email}
              reviewtext={reviewtext}
              onChangeName={e=>setName(e.target.value)}
              onChangeEmail={e=>setEmail(e.target.value)}
              onChangeReview={e=>setReviewtext(e.target.value)}
            />
          </div>
          <div className="captch_form_button">
            <InputsFormButton 
              type="submit"
            >
                {t("submit")}
            </InputsFormButton>
          </div>
        </form>
        <div className="captcha_form_group">
          <ReCAPTCHA
            key={recaptchaKey} 
            sitekey={REACT_APP_SITE_KEY} 
            ref={captchaRef}  
            hl={captchaLanguage}
          />
          {
            error && <p className="captch_text_error">{t('Error')}!! {error}</p>
          }
          {
            message && <p className="captch_text_success">{t("Success")}!! {message}</p>
          }
        </div>
      </>
    )
  })
);