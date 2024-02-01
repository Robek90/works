import { useState, useEffect }from "react";
import { inject, observer } from "mobx-react";

import Preloader from '../../component/preLoader/index';
import YaCaptcha from "../../component/yandexsmartcaptcha";
import ReviewForm from "../../component/reviewsForm";

import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

import './style.css';

export default inject('review') (
  observer((props)=>{
    const [ loading, setLoading ] = useState(false);
    const [ reviewList, setReviewList ] = useState([]);
    const [ resetCaptcha, setResetCaptcha ] = useState(0);
    const [ getStatus, setGetStatus ] = useState("hidden");
    const [ visible, setVisible ] = useState(false);

    const { t } = useTranslation();

    let getNewStatus = (status) => {
      setGetStatus(status)
    };

    let changeVisible=()=>{
      setVisible(true)
      localStorage.setItem("norobot",false)
    };

    useEffect(() => {
      props.review.getReviewData();
      if(props.review.state === "done") {
        setLoading(true);
        props.review.reviewData.then(res => setReviewList(res));
      }
    }, [props.review, props.review.state]);

    useEffect(() => {
      if(getStatus === 'hidden') {
        setResetCaptcha((prev) => prev + 1)
        setVisible(false)
      }
    },[getStatus]);

    return (
      <div className="review_page">
        <div className={getStatus === 'success' ? 'hidden' : "review_page_button_container"}>
          <YaCaptcha 
            resetCaptcha={resetCaptcha}
            visible={visible}
            setVisible={setVisible}
            getNewStatus={getNewStatus}
            changeVisible={changeVisible}
            t={t}
          />
        </div>

        <ReviewForm 
          getStatus={getStatus}
          getNewStatus={getNewStatus}
        />
        {
            !loading ? (
                <Preloader />
            ) : reviewList.length ? (
              reviewList.map((item, index)=>{
                return (
                  <div className="review_content" key={index}>
                    <div className="review_content_header">
                      <div className="review_content_name">
                        <span className="review_name_">{item.name}</span>
                      </div>
                      <div className="review_content_date">
                        <span className="review_date">{item.date}</span>
                      </div>
                    </div>
                    <div className="review_content_main">
                      <div className="review_content_main_header">{t("comment")}</div>
                      <span className="review_text">{item.text}</span>
                    </div>
                  </div>
                )
              })
            ) : (
                <p>{t("no review")}</p>
            )
          }
      </div>
    )
  })
)
