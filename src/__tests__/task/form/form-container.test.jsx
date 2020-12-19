import React from 'react'
import { cleanup, render} from '@testing-library/react'
import TaskFormContainer from '../../../components/task/form/form-container'

afterEach(() => cleanup())
it('should render <TaskFormContainer/>', () => {
    render(<TaskFormContainer/>)
});
