import React from 'react'
import { cleanup, render, screen } from 'test-utils'
import TaskFormContainer from '../../../../components/task/form/form-container'
import userEvent from "@testing-library/user-event";

afterEach(() => cleanup())
it('should render <TaskFormContainer/>', () => {
    render(<TaskFormContainer/>)
});

it("When writen** text into input text of tittle task, this should content the value", () => {
    render(
      <TaskFormContainer  />
    );
    const text = "Writen a title task";
    const input = screen.getByTestId("input-title-task");
    userEvent.type(input, text);
    expect(input.value).toEqual(text);
  });