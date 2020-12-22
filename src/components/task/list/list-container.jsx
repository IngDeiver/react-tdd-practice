import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskListTemplate from "./list-template";
import { createSelector } from "@reduxjs/toolkit";
import { fetchTasks } from "../../../redux/thunks/task.thunk";
import { unwrapResult } from "@reduxjs/toolkit";

const TasksListContainer = () => {
  const dispatch = useDispatch();
  const taskIds = useSelector(
    createSelector(
      (state) => state.tasks,
      (tasks) => tasks.map((task) => task.taskId)
    )
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
