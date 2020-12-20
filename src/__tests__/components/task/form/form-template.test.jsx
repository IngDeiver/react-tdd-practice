import React from "react";
import { cleanup, render, screen } from "test-utils";
import TaskFormTemplate from "../../../../components/task/form/form-template";

//mocks
const mockOnChange = jest.fn();
const mockAddTask = jest.fn();

// life cicle
afterEach(() => {
  cleanup();
  mockOnChange.mockClear();
  mockAddTask.mockClear();
});

// tests
it("should render <TaskFormTemplate/>", () => {
  render(
    <TaskFormTemplate title="" onChange={mockOnChange} addTask={mockAddTask} />
  );
});

it("When clicked the button what added a new task the input text title should be cleaned", () => {
  render(
    <TaskFormTemplate title="" onChange={mockOnChange} addTask={mockAddTask} />
  );
  expect(screen.getByTestId("btn-add-task").disabled).toBeTruthy();
});
