import { combineReducers } from 'redux'
import clapuser from './userSlice'
import applouduser from './applouduserSlice'

const rootReducer = combineReducers({
    
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
