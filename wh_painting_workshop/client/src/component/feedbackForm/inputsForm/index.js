
export default function InputsForm(props) {
  let {t, name, email, feedbacktext, onChangeName, onChangeEmail,onChangeFeedback } = props;
    
  return (
    <>
      <div className="feedback_inputs_row">
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
      <div className="feedback_inputs_col">
        <input
          className="input_col"
          type="text"
          placeholder={t("enter your feedback")}
          value={feedbacktext}
          onChange={onChangeFeedback}
        />
      </div>
    </>
  );
}
