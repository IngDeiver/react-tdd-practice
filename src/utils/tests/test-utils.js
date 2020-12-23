import React from "react";
import { render} from "@testing-library/react";

// api
import {list} from '../../services/TaskApiService'


// redux
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {fetchTasks} from '../../redux/thunks/task.thunk'
import taskReducer from '../../redux/reducers/task.reducer'

// hooks 
import useApi from '../../hooks/useApi'

const mockStore = configureStore([thunkMiddleware])
const store = mockStore({tasks:[{taskId:"id", title:"title"}, {taskId:"id2", title:"title2"}]})

const AllTheProviders = ({ children }) => {
  return <Provider store={store} >{children}</Provider>
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, store, list, fetchTasks, taskReducer, useApi};