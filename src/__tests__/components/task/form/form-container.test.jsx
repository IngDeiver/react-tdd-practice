import React from 'react'
import { cleanup, render } from 'test-utils'
import TaskFormContainer from '../../../../components/task/form/form-container'

afterEach(() => cleanup())
it('should render <TaskFormContainer/>', () => {
    render(<TaskFormContainer/>)
});
