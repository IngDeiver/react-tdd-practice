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
import TaskDetailContainer from "../../../../../components/task/detail/detail-container";

import userEvent from "@testing-library/user-event";
import waitForActions, { matchers } from "redux-mock-store-await-actions";


afterEach(() => {
  cleanup()
  store.clearActions();
});

it("should render <TaskDetailContainer/>", () => {
  render(<TaskDetailContainer taskId={mockTasks[0]._id} />);
});

it("When remove a task should dispatch the remove task thunk action", async () => {
  render(<TaskDetailContainer taskId={mockTasks[0]._id} />);
  userEvent.click(screen.getByTestId("btn-delete-task"));
  const expectActions = removeTask.pending.type;
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
  userEvent.click(screen.getByTestId("btn-edit-task"))
  userEvent.click(screen.getByTestId("btn-update-task"));
  const expectActions = updateTask.pending.type;
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
