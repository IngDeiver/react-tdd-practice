import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TaskListTemplate from "./list-template";
import { fetchTasks } from "../../../redux/thunks/task.thunk";
import { unwrapResult } from "@reduxjs/toolkit";

const TasksListContainer = () => {
  const dispatch = useDispatch();
  const taskIds = useSelector(
      (state) => state.tasks.map((task) => task.taskId)
    , shallowEqual
  );
  const getTasks = () => {
    dispatch(fetchTasks())
      .then(unwrapResult)
      .then((res) => {})
      .catch((err) => {});
  };
  useEffect(() => {
    getTasks();
  });
  return (
    <>
      <TaskListTemplate tasks={taskIds} />
    </>
  );
};

export default React.memo(TasksListContainer);
