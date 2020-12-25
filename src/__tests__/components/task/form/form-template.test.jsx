import userEvent from "@testing-library/user-event";
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

it("should be disabled the button add when not have text the input of title", () => {
  render(
    <TaskFormTemplate title="" onChange={mockOnChange} addTask={mockAddTask} />
  );
  expect(screen.getByTestId("btn-add-task").disabled).toBeTruthy();
});

