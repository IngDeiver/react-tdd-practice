import React from "react";
import { cleanup, render, store, fetchTasks, mockTasks} from 'test-utils'
import TaskListContainer from "../../../../components/task/list/list-container";
import axios from 'axios';

jest.mock('axios');

//redux

afterEach(() => {
  cleanup()
  store.clearActions()
});

it("should render <TaskDetailContainer/>", () => {
  render(<TaskListContainer />);
});

it("When Task list component render** should dispatch the fetch action", () => {
    const resp = {data: mockTasks};
    axios.get.mockResolvedValue(resp);
    render(<TaskListContainer />);
    expect(store.getActions().map(action => action.type)).toEqual([fetchTasks.pending.type])
});
