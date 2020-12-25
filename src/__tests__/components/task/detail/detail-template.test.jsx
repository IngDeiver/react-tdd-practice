import React from 'react'
import { cleanup, render, screen } from 'test-utils'
import TaskDetailTemplate from '../../../../components/task/detail/detail-tamplate'
import userEvent from "@testing-library/user-event";

//mocks
let fakeTask = {taskId:22, title: "Fake test 22"}
const mockOnRemoveTask = jest.fn()
const mockOnUpdateTask = jest.fn()

// life cicle
afterEach(() => {
    cleanup();
    mockOnRemoveTask.mockClear()
    mockOnUpdateTask.mockClear()
})

// tests
it('should render <TaskDetailTemplate/>', () => {
    render(<TaskDetailTemplate task={fakeTask} onRemoveTask={mockOnRemoveTask} />)
});

it('should call remove task', () => {
    render(<TaskDetailTemplate task={fakeTask} onRemoveTask={mockOnRemoveTask} />)
    userEvent.click(screen.getAllByText("Delete")[0])
    expect(mockOnRemoveTask).toBeCalled()
});

it('should call update task', () => {
    render(<TaskDetailTemplate task={fakeTask} onRemoveTask={mockOnRemoveTask}
        onUpdateTask={mockOnUpdateTask}
    />)
    userEvent.click(screen.getAllByText("Edit")[0])
    userEvent.click(screen.getAllByText("Update")[0])
    expect(mockOnUpdateTask).toBeCalled()
});

it('When clicked the button what edit should show form for edit and have the value to edit', () => {
    render(<TaskDetailTemplate task={fakeTask} onRemoveTask={mockOnRemoveTask} />)
    userEvent.click(screen.getAllByText("Edit")[0])
    expect(screen.getByTestId("mode-update")).toBeDefined()
    expect(screen.getByTestId("title-to-edit")).toBeDefined()
});