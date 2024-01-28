import React, { useState, useEffect }from "react";
import { inject, observer } from "mobx-react";

import Preloader from '../../component/preLoader/index';
import YaCaptcha from "../../component/yandexsmartcaptcha";
import FeedbackForm from "../../component/feedbackForm";

import Button from '@mui/material/Button';

import getCurrentDate from "../../utils/getDate"
import { useTranslation } from 'react-i18next';

import './style.css';

export default inject('feedback') (
  observer((props)=>{
    const { feedback } = props;

    const [ loading, setLoading ] = useState(false);
    const [ feedbackList, setFeedbackList ] = useState([]);
    const [ resetCaptcha, setResetCaptcha ] = useState(0);
    const [ getStatus, setGetStatus ] = useState("hidden");
    const [ visible, setVisible ] = useState(false);

    const { t } = useTranslation();

    let getNewStatus = (status) => {
      setGetStatus(status)
    };

    let changeVisible=()=>{
      setVisible(true)
    };

    useEffect(() => {
      setFeedbackList(feedback.feedbackData);
      setLoading(true);
    }, [feedback.feedbackData]);

    useEffect(() => {
      if(getStatus === 'hidden') {
        setResetCaptcha((prev) => prev + 1)
        setVisible(false)
      }
    },[getStatus]);

    return (
      <div className="feedback_page">
        <div className={getStatus === 'success' ? 'hidden' : "feedback_page_button_container"}>
          <Button 
            variant="contained"
            onClick={changeVisible}
          >
            <p>{t("add feedback")}</p>
          </Button>
        </div>
        <YaCaptcha 
          resetCaptcha={resetCaptcha}
          visible={visible}
          setVisible={setVisible}
          getNewStatus={getNewStatus}
        />
        <FeedbackForm 
          getStatus={getStatus}
          getNewStatus={getNewStatus}
        />
        {
            !loading ? (
                <Preloader />
            ) : feedbackList.length ? (
              feedbackList.map((item, index)=>{
                return (
                  <div className="feedback_content" key={index}>
                    <div className="feedback_content_header">
                      <div className="feedback_content_name">
                        <span className="feedback_name_">{item.name}</span>
                      </div>
                      <div className="feedback_content_date">
                        <span className="feedback_date">{getCurrentDate()}</span>
                      </div>
                    </div>
                    <div className="feedback_content_main">
                      <div className="feedback_content_main_header">{t("feedback")}</div>
                      <span className="feedback_text">{item.text}</span>
                    </div>
                  </div>
                )
              })
            ) : (
                <p>{t("no feedback")}</p>
            )
          }
      </div>
    )
  })
)
