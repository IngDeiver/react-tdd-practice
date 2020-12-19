import React from "react";
import { cleanup, render, store} from 'test-utils'
import TaskListContainer from "../../../../components/task/list/list-container";

//redux
import {
  fetchTasksAction,
  addtTaskAction,
  updateTaskAction,
  removeTaskAction,
} from "../../../../redux/actions/task.action";

afterEach(() => {
  cleanup()
  store.clearActions()
});

it("should render <TaskDetailContainer/>", () => {
  render(<TaskListContainer />);
});

it("When Task list component render** should dispatch the action {type:task/fetchTask, payload: null}", () => {
    render(<TaskListContainer />);
    expect(store.getActions()).toEqual([fetchTasksAction()])
});
