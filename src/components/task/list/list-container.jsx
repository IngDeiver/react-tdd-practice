import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TaskListTemplate from "./list-template";
import { fetchTasks } from "../../../redux/thunks/task.thunk";

const TasksListContainer = () => {
  const dispatch = useDispatch();
  const taskIds = useSelector(
      (state) => state.tasks.map((task) => task._id)
    , shallowEqual
  );
  const getTasks = () => {
    dispatch(fetchTasks())
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
