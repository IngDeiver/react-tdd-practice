import React from "react";
import { cleanup, render, screen, addTask, store } from "test-utils";
import TaskFormContainer from "../../../../components/task/form/form-container";
import userEvent from "@testing-library/user-event";
import waitForActions, { matchers } from "redux-mock-store-await-actions";
import axios from "axios";


jest.mock("axios");
afterEach(() => cleanup());

it("should render <TaskFormContainer/>", () => {
  render(<TaskFormContainer />);
});

it("When writen** text into input text of tittle task, this should content the value", () => {
  render(<TaskFormContainer />);
  const text = "Writen a title task";
  const input = screen.getByTestId("input-title-task");
  userEvent.type(input, text);
  expect(input.value).toEqual(text);
});

it("When added a new task should dispatch add task thunk action", async () => {
  render(<TaskFormContainer />);
  axios.post.mockResolvedValue({data: {}});
  userEvent.type(screen.getByTestId("input-title-task"), "Task added");
  userEvent.click(screen.getByTestId("btn-add-task"));

  await waitForActions(store, [addTask.fulfilled.type], {
    matcher: matchers.containing,
  });

  expect(
    store
      .getActions()
      .map((action) => action.type)
      .includes(addTask.fulfilled.type)
  ).toBeTruthy();

  expect(screen.getByTestId("input-title-task").value).toEqual("")
});

