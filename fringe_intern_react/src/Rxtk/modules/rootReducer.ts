import { combineReducers } from '@reduxjs/toolkit'
import { StateType } from "typesafe-actions";
import userSlice from "./userSlice"

const rootReducer = combineReducers({
    user: userSlice.reducer
})

export type RootState = StateType<typeof rootReducer>
export default rootReducer;