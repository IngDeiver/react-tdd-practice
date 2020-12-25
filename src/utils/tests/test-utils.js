import React from "react";
import { render} from "@testing-library/react";

// api
import {list, add, update, remove} from '../../services/TaskApiService'


// redux
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {fetchTasks, addTask, updateTask, removeTask} from '../../redux/thunks/task.thunk'
import taskReducer from '../../redux/reducers/task.reducer'

// hooks 
import useApi from '../../hooks/useApi'

const tasks = [{_id:"id", title:"title"}, {_id:"id2", title:"title2"}]
const mockStore = configureStore([thunkMiddleware])
const store = mockStore({tasks})

const AllTheProviders = ({ children }) => {
  return <Provider store={store} >{children}</Provider>
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, store, list, fetchTasks, addTask, updateTask, removeTask,
taskReducer, useApi,
add, update, remove, tasks as mockTasks};