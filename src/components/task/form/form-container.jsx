import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TaskFormTemplate from "./form-template";
import { addTask as addTaskThunk } from '../../../redux/thunks/task.thunk'

const TaskFormContainer = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTaskThunk({title}))
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
