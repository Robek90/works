import React, { useState } from "react";

export default function Tabs(props) {
  const [curSection, setCurSection] = useState("All");

  let tabsArr = ["All", "Idle", "Done", "Removed"];

  const filt = (type) => {
    let data = props.tasks;
     if (!type) {
      data.forEach((item) => {
        item.visible = true;
      });
      props.filter("all");
    } else {
      data.forEach((item) => {
        if (item.status === type.toLowerCase()) {
          item.visible = true;
        } else {
          item.visible = false;
        }
      });
      props.filter(type.toLowerCase());
    }
    props.tasksUp(data);
  };

  const buttonOnClick = (item) => {
    if (item === "All") {
      filt();
    }

    if (item === "Idle") {
      filt("Idle");
    }

    if (item === "Done") {
      filt("Done");
    }

    if (item === "Removed") {
      filt("Removed");
    }
  };

  return (
    <>
      <div className="tabs">
        {tabsArr.map((section, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setCurSection(section);
                buttonOnClick(section);
              }}
              className={section === curSection ? "active" : ""}
            >
              {section}
            </button>
          );
        })}
      </div>
    </>
  );
}