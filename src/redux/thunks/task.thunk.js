import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {list} from '../../services/TaskApiService'

const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, thunkAPI) => {
        const {data} = await list();
        return data
    }
)

export {
    fetchTasks
}