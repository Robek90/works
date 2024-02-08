import { makeAutoObservable, runInAction } from 'mobx';

export default class review {
  reviewData = [];
  state = "pending";

  constructor() {
    makeAutoObservable(this);
  }

  setShowAlert = (data) => {
    this.state = data;
  };
  
  getReviewData = async() => {
    try {
      const url = '/getreview';
      const response = await fetch(url);

      const data = response.json();

      runInAction(()=>{
        this.reviewData = data.then(res=>(res));
        this.state = "done";
      })
    } catch (e) {
      runInAction(()=>{
        this.state = "error";
      })
    }
  };

  setReviewData = async(review) => {
    try {
      const url = '/setreview';
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          review
        )
      });

      let result = await response.json();

      runInAction(()=>{
        console.log(result);
        this.state = "set";
      })
    } catch (e) {
      runInAction(()=>{
        this.state = "error";
      })
    }
  };
}