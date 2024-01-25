import React, { useState, useEffect }from "react";
import { Link } from 'react-router-dom';
import { inject, observer } from "mobx-react";

import Preloader from '../../component/preLoader/index';
import YaCaptcha from "../../component/yandexsmartcaptcha";
import FeedbackForm from "../../component/feedbackForm";

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
    }
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
        <Link 
          onClick={changeVisible}
        >
          Оставить отзыв
        </Link>
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
                  <div className="row" key={index}>
                    <span className="feedback">{item.name}</span>
                    <span className="feedback">{item.email}</span>
                    <span className="feedback">{item.text}</span>
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
