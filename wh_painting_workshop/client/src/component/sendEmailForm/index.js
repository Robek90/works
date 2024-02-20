import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import i18n from '../../services/i18n';

import { getCaptchaRequest } from '../../services/captchaReq';
import "./style.css";

let REACT_APP_SITE_KEY = "6Ldk9mspAAAAAOjDmxibcUwNQb5rer4OzpG-SWlw";

export default function SendEmailForm(props) {
  let { t, totalSumm } = props;

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ emailDirty, setEmailDirty ] = useState(false);
  const [ nameDirty, setNameDirty ] = useState(false);
  const [ phoneDirty, setPhoneDirty ] = useState(false);
  const [ nameError, setNameError ] = useState(t("Form name cannot be empty"));
  const [ emailError, setEmailError ] = useState(t("Form email cannot be empty"));
  const [ phoneError, setPhoneError ] = useState(t("Form phone cannot be empty"));
  const [ message, setMessage ] = useState("");
  const [ error, setError ] = useState("");

  const [captchaLanguage, setCaptchaLanguage] = useState(i18n.language);
  const [recaptchaKey, setRecaptchaKey] = useState(0);
  
  const captchaRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setNameError('')
    setEmailError('')
    setPhoneError('')
    setError('')
    setOpen(false)
  };
  
  const verifyToken = (token) => {
    return getCaptchaRequest(token);
  };

  const changeName = (e) => {
    setName(e.target.value);
    const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setNameError(t("Not valid name"));
    } else {
        setNameError('');
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError(t("Not valid email"));
    } else {
        setEmailError('');
    }
  };

  const changeHandlerPhone = (e) => {
    setPhone(e.target.value);
    const re = /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    if (!re.test(String(e.target.value).toLowerCase())){
      setPhoneError(t("Not valid phone"))
    }else{
      setPhoneError("")
    }
  };

  const blurHandler = (e) =>{
    switch(e.target.name){
      case "name":
        setNameDirty(true)
        break
        case "phone":
          setPhoneDirty(true)
          break
          case "email":
            setEmailDirty(true)
            break
            default:
    }
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if(name && email && phone) {
      let token = captchaRef.current.getValue();
      if(token) {
        let valid_token = await verifyToken(token);
        if(valid_token.success) {
          try {
            const url = "/sendemail";
        
            await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, phone, totalSumm }),
              })
                .then((response) => {
                  if(response.json()) {
                    handleClose(true)
                  }
                })
            setMessage(t("Hurray!! You have placed an order. We will contact you as soon as possible."));
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        setError(t("You must confirm you are not a robot."));
      }
    } else {
      setError(t("Please fill in all form."))
    }
  };

  useEffect(() =>{
    setNameError(t("Form name cannot be empty"));
    setEmailError(t("Form email cannot be empty"));
    setPhoneError(t("Form phone cannot be empty"));
    setCaptchaLanguage(i18n.language);
    setRecaptchaKey((prevKey) => prevKey + 1);
  }, [t])

  return (
    <div>
      <Button 
        onClick={handleOpen}
        className="open_form_button"
        variant="contained"
      >
        {t("send request")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box 
          className="login_box"
        >
          <div >
            <h2>{t("request")}</h2>
            <form >
            {(nameDirty && nameError) && <div className="error1">{nameError}</div>}
                <div className="user_box">
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={changeName}
                        onBlur={e => blurHandler(e)}
                        placeholder={t("Please enter name:")}
                    />
                </div>
                {(emailDirty && emailError) && <div className="error2">{emailError}</div>}
                <div className="user_box">
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={changeEmail}
                        onBlur={e => blurHandler(e)}
                        placeholder={t("Please enter email:")}
                    />
                </div>
                {(phoneDirty && phoneError) && <div className="error3">{phoneError}</div>}
                <div className="user_box">
                    <input
                        onChange={changeHandlerPhone}
                        onBlur={e => blurHandler(e)}
                        type="text"
                        value={phone}
                        id=""
                        name="phone"
                        placeholder={t("Please enter phone:")}
                    />
                </div>
                <div className="user-box">
                </div>
                <Button 
                  className="send_form_button" 
                  onClick={submitEmail}
                  variant="contained"
                >
                  {t('send form')}
                </Button>
                <div className="captcha_form_group_cart">
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
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}