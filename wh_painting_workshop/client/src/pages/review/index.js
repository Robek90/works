import { useState, useEffect }from "react";
import { inject, observer } from "mobx-react";

import Preloader from '../../component/preLoader/index';
import ReviewForm from "../../component/reviewForm/index";

import { useTranslation } from 'react-i18next';

import './style.css';

export default inject('review') (
  observer((props)=>{
    const [ loading, setLoading ] = useState(false);
    const [ reviewList, setReviewList ] = useState([]);

    const { t } = useTranslation();

    useEffect(() => {
      props.review.getReviewData();
      if(props.review.state === "done") {
        setLoading(true);
        props.review.reviewData.then(res => setReviewList(res));
      }
    }, [props.review, props.review.state]);

    return (
      <div className="review_page">
        <ReviewForm/>
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
