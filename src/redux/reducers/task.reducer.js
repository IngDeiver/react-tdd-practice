/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTasks as fetch,
  addTask as add,
  updateTask as update,
  removeTask as remove,
} from "../thunks/task.thunk";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  /*reducers: {
      fetchTasks (state, action) {
        return state
      },
      addtTask (state, action) {
        state.push(action.payload)
      },
      removeTask (state, action){
        return state.filter(task => task.taskId !== action.payload)
      },
      updateTask (state, action) {
        return state.map(task  => {
            if (task.taskId  !== action.payload){
                return task
            }

            return {
                ...task,
                title: action.payload
            }
        })
      }
    }*/
  extraReducers: (builder) => {
    builder.addCase(fetch.fulfilled, (_, { payload }) => payload),
      builder.addCase(add.fulfilled, (state, { payload }) =>
        [...state, payload]
      ),
      builder.addCase(update.fulfilled, (state, { payload }) => {
        return state.map((task) => {
          if (task._id !== payload._id) {
            return task;
          }

          return {
            ...task,
            title: payload.title,
          };
        });
      }),
      builder.addCase(remove.fulfilled, (state, { payload }) => {
        return state.filter((task) => task._id !== payload._id);
      })
  },
});

export const {
  fetchTasks,
  addTask,
  removeTask,
  updateTask,
} = taskSlice.actions;

export default taskSlice.reducer;
