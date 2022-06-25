import React, { useState } from "react";
import TaskList from "./TasksList";
import IncTask from "./IncTask";

function ToDo() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("Memory")) ||  []
  );

  const createArray = (item) => {
    setData([...item]);
  };

  const clearStorage = () => {
    localStorage.clear()
    setData([])
  };
  
  return (
    <div 
      className="todoWrapper"
    >
      <TaskList data={data} dataUp={createArray} localdata={clearStorage}/>
      <IncTask dataUp={createArray} data={data}/>
    </div>
  );
}

export default ToDo;
