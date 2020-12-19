import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TaskListTemplate from '../../../../components/task/list/list-template'

//mocks
let fakeTasks = [{taskId:22, title: "Fake test 22"}]

// life cicle
afterEach(() => {
    cleanup();
})

// tests
it('should render <TaskDetailTemplate/>', () => {
    render(<TaskListTemplate tasks={fakeTasks}/>)
});