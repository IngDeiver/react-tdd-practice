import React from "react";
import { cleanup, render, screen} from 'test-utils'
import TaskFormTemplate from "../../../../components/task/form/form-template";
import userEvent from '@testing-library/user-event'


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


it('When writen** text into input text of tittle task, this should content the value', () => {
  render(<TaskFormTemplate/>)
  const text = "Writen a title task"
  const input = screen.getByTestId('input-title-task')
  userEvent.type(input,text)
  expect(input.value).toEqual(text)
});