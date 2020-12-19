import { createSlice } from '@reduxjs/toolkit'


const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
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
    }
  })
  
  export const { fetchTasks, addtTask, removeTask, updateTask } = taskSlice.actions
  
  export default taskSlice.reducer