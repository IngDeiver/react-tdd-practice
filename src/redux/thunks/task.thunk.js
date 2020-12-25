import { createAsyncThunk } from '@reduxjs/toolkit'
import {list, add, update, remove} from '../../services/TaskApiService'

const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, thunkAPI) => {
        const {data} = await list();
        return data
    }
)

const addTask = createAsyncThunk(
    'tasks/addTask',
    async (task, thunkAPI) => {
        const {data} = await add(task);
        return data
    }
)

const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({id, task}, thunkAPI) => {
        const {data} = await update(id, task);
        return data
    }
)

const removeTask = createAsyncThunk(
    'tasks/removeTask',
    async (id, thunkAPI) => {
        const {data} = await remove(id);
        return data
    }
)
export {
    fetchTasks,
    addTask,
    updateTask,
    removeTask
}