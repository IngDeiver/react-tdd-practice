import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import TaskListTemplate from "./list-template";
import {fetchTasksAction} from '../../../redux/actions/task.action'
import { createSelector }  from '@reduxjs/toolkit'

const TasksListContainer = () => {
  const taskIds = useSelector(createSelector(
    state => state.tasks,
    tasks => tasks.map(task => task.taskId)
  ))
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
