import React, { useState, useRef } from "react";
import SaveBtn from "./SaveBtn";

function Input(props) {
  const [taskName, setTaskName] = useState("");

  const inputClear = useRef(null);

  const handleSave = () => {
    props.dataUp([
      ...props.data,
      {
        name: taskName,
        status: "idle",
        visible: true,
      },
    ]);
    inputClear.current.value = "";
    setTaskName("");
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="inputText">
      <input
        className="taskInput"
        type="text"
        ref={inputClear}
        placeholder="What do you need to do?"
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      />
      <SaveBtn dataChange={handleSave} />
    </div>
  );
}

export default Input;
