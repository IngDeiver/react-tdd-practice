import React from 'react'
import { cleanup, render, screen, waitFor, addTask, store } from 'test-utils'
import userEvent from "@testing-library/user-event";
import waitForActions, { matchers } from "redux-mock-store-await-actions";
import App from '../App'
import axios from "axios";


jest.mock("axios");
afterEach(() => cleanup());

it('should render <App/>', () => {
    render(<App/>)
});

it("DOM should content the new task added", async () => {
    render(<App />);
    const data = {_id:"id4", title:"Task added"}
    axios.post.mockResolvedValue({data});
    
    const d = await store.dispatch(addTask(data))
    console.log(d);
    await waitFor(() => {
        expect(screen.getByText(data.title)).toBeInTheDocument()
    })
      
  
    
  });
  