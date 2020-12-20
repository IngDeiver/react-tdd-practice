import React from 'react'
import { cleanup, render, screen } from 'test-utils'
import TaskListTemplate from '../../../../components/task/list/list-template'

//mocks
let mockTaskIds = ["id","id2"]

// life cicle
afterEach(() => {
    cleanup();
})

// tests
it('<TaskListTemplate/> should render', () => {
    render(<TaskListTemplate tasks={mockTaskIds}/>)
});

it('<TaskListTemplate/> should have tasks into DOM when render with tasks array', () => {
    render(<TaskListTemplate tasks={mockTaskIds}/>)
    expect(screen.getByText(mockTaskIds[0])).toBeDefined()
    expect(screen.getByText(mockTaskIds[1])).toBeDefined()
});