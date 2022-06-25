import React from "react";

export const AllItems = (props) => {
  const { curFilter, tasks, handleDone, handleRemove, handleIdle } = props;

  return (
    <>
      {curFilter === "all" &&
        tasks.map((item, index) => {
          return (
            <li key={index} className={item.status}>
              <button
                className="idle"
                type="button"
                onClick={() => handleIdle(index)}
              ></button>
              <p>{item.name}</p>
              <button
                className="highlight"
                type="button"
                onClick={() => handleDone(index)}
              ></button>
              <button
                className="cutDown"
                type="button"
                onClick={() => handleRemove(index)}
              ></button>
            </li>
          );
        })}
    </>
  );
};

export const FilteredItems = (props) => {
  const { curFilter, tasks, handleDone, handleRemove, handleIdle } = props;

  return (
    <>
      {tasks.map((item, index) => {
        return (
          <li
            key={index}
            className={`${item.status} ${
              item.status === curFilter && item.visible === true ? "" : "hidden"
            }`}
          >
            <button
              className="idle"
              type="button"
              onClick={() => handleIdle(index)}
            ></button>
            <p>{item.name}</p>
            <button
              className="highlight"
              type="button"
              onClick={() => handleDone(index)}
            >
              {" "}
            </button>
            <button
              className="cutDown"
              type="button"
              onClick={() => handleRemove(index)}
            ></button>
          </li>
        );
      })}
    </>
  );
};
