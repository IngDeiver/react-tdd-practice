import React from 'react'
import { cleanup, render } from 'test-utils'
import TaskDetailContainer from '../../../../components/task/detail/detail-container'

afterEach(() => cleanup())

it('should render <TaskDetailContainer/>', () => {
    render(<TaskDetailContainer taskId={1}/>)
});