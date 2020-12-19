import React from 'react'
import { cleanup, render } from 'test-utils'
import TaskDetailTemplate from '../../../../components/task/detail/detail-tamplate'

//mocks
let fakeTask = {taskId:22, title: "Fake test 22"}
const mockOnRemoveTask = jest.fn()

// life cicle
afterEach(() => {
    cleanup();
    mockOnRemoveTask.mockClear()
})

// tests
it('should render <TaskDetailTemplate/>', () => {
    render(<TaskDetailTemplate task={fakeTask} onRemoveTask={mockOnRemoveTask}/>)
});