import React from 'react'
import { cleanup, render } from 'test-utils'
import TaskListTemplate from '../../../../components/task/list/list-template'

//mocks
let fakeTasks = [2]

// life cicle
afterEach(() => {
    cleanup();
})

// tests
it('should render <TaskDetailTemplate/>', () => {
    render(<TaskListTemplate tasks={fakeTasks}/>)
});