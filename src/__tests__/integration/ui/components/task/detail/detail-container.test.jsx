import React from "react";
import {
  cleanup,
  render,
  mockTasks,
  store,
  screen,
  removeTask,
  updateTask,
} from "test-utils";
import TaskDetailContainer from "../../../../../../components/task/detail/detail-container";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import waitForActions, { matchers } from "redux-mock-store-await-actions";

jest.mock("axios");

afterEach(() => cleanup());

it("should render <TaskDetailContainer/>", () => {
  render(<TaskDetailContainer taskId={mockTasks[0]._id} />);
});

it("When remove a task should dispatch the remove task thunk action", async () => {
  render(<TaskDetailContainer taskId={mockTasks[0]._id} />);
  axios.delete.mockResolvedValue({ data: mockTasks[0] });
  userEvent.click(screen.getAllByText("Delete")[0]);

  const expectActions = removeTask.fulfilled.type;
  await waitForActions(store, [expectActions], {
    matcher: matchers.containing,
  });

  expect(
    store
      .getActions()
      .map((action) => action.type)
      .includes(expectActions)
  ).toBeTruthy();
});

it("When update a task should dispatch update task thunk action.", async () => {
  render(<TaskDetailContainer taskId={mockTasks[0]._id} />);
  axios.put.mockResolvedValue({ data: mockTasks[0] });
  userEvent.click(screen.getAllByText("Edit")[0])
  userEvent.click(screen.getAllByText("Update")[0]);

  const expectActions = updateTask.fulfilled.type;
  await waitForActions(store, [expectActions], {
    matcher: matchers.containing,
  });
  expect(
    store
      .getActions()
      .map((action) => action.type)
      .includes(expectActions)
  ).toBeTruthy();
});
