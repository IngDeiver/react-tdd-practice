import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TaskFormTemplate from "./form-template";
import { addtTaskAction } from '../../../redux/actions/task.action'
import uid from 'uid'

const TaskFormContainer = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()

  const addTask = () => {
    const taskId = uid(10)
    dispatch(addtTaskAction({taskId, title}))
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
