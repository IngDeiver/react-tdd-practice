import React from "react";
import { cleanup, render, store, fetchTasks} from 'test-utils'
import TaskListContainer from "../../../../../components/task/list/list-container";

afterEach(() => {
  cleanup()
  store.clearActions()
});

it("should render <TaskDetailContainer/>", () => {
  render(<TaskListContainer />);
});

it("When Task list component render** should dispatch the fetch action", () => {
    render(<TaskListContainer />);
    expect(store.getActions().map(action => action.type)).toEqual([fetchTasks.pending.type])
});
