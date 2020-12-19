import React, { useState } from "react";
import TaskFormTemplate from "./form-template";

const TaskFormContainer = () => {
  const [title, setTitle] = useState("");

  const addTask = () => {
    // use redux
    setTitle("")
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return <TaskFormTemplate onChange={handleChange} title={title} 
      addTask={addTask}
  />;
};

export default React.memo(TaskFormContainer);
