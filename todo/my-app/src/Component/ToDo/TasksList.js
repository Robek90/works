import React, { useState, useEffect } from "react";

import { AllItems, FilteredItems } from "./Items";

import Tabs from "./Tabs";

function Task(props) {
  const [tasks, setTasks] = useState(props.data);
  const [taskCount, setTaskCount] = useState(props.data.length);
  const [curFilter, setCurFilter] = useState("all");

  const setLocalStorage = (res) => {
    localStorage.setItem("Memory", JSON.stringify(res));
  };

  const handleDone = (arrIndex) => {
    let res = tasks.map((task, index) => {
      return {
        ...task,
        status: arrIndex === index ? "done" : task.status,
      };
    });
    setTasks(res);
  };

  const handleRemove = (arrIndex) => {
    let res = tasks.map((task, index) => {
      return {
        ...task,
        status: arrIndex === index ? "removed" : task.status,
      };
    });
    setTasks(res);
  };

  const handleIdle = (arrIndex) => {
    let res = tasks.map((task, index) => {
      return {
        ...task,
        status: arrIndex === index ? "idle" : task.status,
      };
    });
    setTasks(res);
  };

  useEffect(() => {
    setTasks(props.data);
    setLocalStorage(props.data);
    setTaskCount(props.data.length);
  }, [props.data]);

  useEffect(() => {}, [curFilter]);

  return (
    <div className="taskList">
      <h1>To Do: {taskCount}</h1>
      <Tabs tasks={tasks} tasksUp={props.dataUp} filter={setCurFilter} />
      <ul>
        <AllItems
          tasks={tasks}
          curFilter={curFilter}
          handleDone={handleDone}
          handleRemove={handleRemove}
          handleIdle={handleIdle}
        />
        <FilteredItems
          tasks={tasks}
          curFilter={curFilter}
          handleDone={handleDone}
          handleRemove={handleRemove}
          handleIdle={handleIdle}
        />
      </ul>
      <button
          className="clear"
          type="button"
          onClick={() => props.localdata()}
      >
        clear
      </button>
    </div>
  );
}

export default Task;
