import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TaskListTemplate from "./list-template";
import {fetchTasksAction} from '../../../redux/actions/task.action'

const TasksListContainer = () => {
  const taskIds = useSelector(state => state.tasks.map(task => task.taskId), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasksAction())
  })
  return (
    <>
      <TaskListTemplate
        tasks={taskIds}
      />
    </>
  );
};

export default React.memo(TasksListContainer);
