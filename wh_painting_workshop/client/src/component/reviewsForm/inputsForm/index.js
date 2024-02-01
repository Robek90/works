
export default function InputsForm(props) {
  let {t, name, email, reviewtext, onChangeName, onChangeEmail,onChangeReview } = props;
    
  return (
    <>
      <div className="review_inputs_row">
        <input
          className="input_row"
          type="text"
          placeholder={t("enter your name")}
          value={name}
          onChange={onChangeName}
        />
        <input
          className="input_row"
          type="text"
          placeholder={t("enter your Email")}
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className="review_inputs_col">
        <input
          className="input_col"
          type="text"
          placeholder={t("enter your review")}
          value={reviewtext}
          onChange={onChangeReview}
        />
      </div>
    </>
  );
}
