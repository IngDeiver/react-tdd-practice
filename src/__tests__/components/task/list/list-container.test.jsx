import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TaskListContainer from '../../../../components/task/list/list-container'

afterEach(() => cleanup())

it('should render <TaskDetailContainer/>', () => {
    render(<TaskListContainer/>)
});