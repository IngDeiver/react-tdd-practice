import React from 'react'
import { cleanup, render } from 'test-utils'
import App from '../../../App'


jest.mock("axios");
afterEach(() => cleanup());

it('should render <App/>', () => {
    render(<App/>)
});

  