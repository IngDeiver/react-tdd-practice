import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TaskDetailContainer from '../../../../components/task/detail/detail-container'

afterEach(() => cleanup())

it('should render <TaskDetailContainer/>', () => {
    render(<TaskDetailContainer taskId={1}/>)
});