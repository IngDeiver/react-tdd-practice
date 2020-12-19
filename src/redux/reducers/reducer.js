import {combineReducers} from '@reduxjs/toolkit'
import taskReducer from './task.reducer'

export default combineReducers({
    tasks: taskReducer
})