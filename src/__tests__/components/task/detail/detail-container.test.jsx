import React from 'react'
import { cleanup, render } from 'test-utils'
import TaskDetailContainer from '../../../../components/task/detail/detail-container'

const mockId = "id"
afterEach(() => cleanup())

it('should render <TaskDetailContainer/>', () => {
    render(<TaskDetailContainer taskId={mockId}/>)
});