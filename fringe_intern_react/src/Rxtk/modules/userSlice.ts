import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import users from "../../UsersList";



export type UserState = {
    id?: number,
    name?: string,
    tasknumber?: number,
    complete?: number,
    tasks: string[],
};

const UserState: UserState = {
    id: users[0].id,
    name: users[0].name,
    tasknumber: users[0].tasknumber,
    complete: users[0].complete,
    tasks: users[0].tasks,
}

const user = createSlice({
    name: 'user',
    initialState: UserState,
    reducers: {
        AddTask(state, action: PayloadAction<string>) {
            state.tasks = [action.payload, ...state.tasks]
        },
        AddComplete(state, action: PayloadAction<number>) {
            state.complete = state.complete as number +action.payload
        },
        ChangeUserId(state, action: PayloadAction<number>) {
            state.id= users[action.payload].id,
                state.name= users[action.payload].name,
                    state.tasknumber= users[action.payload].tasknumber,
                        state.complete= users[action.payload].complete,
                            state.tasks= users[action.payload].tasks,
        },
    },
})

export const { AddTask, ChangeUserId, AddComplete} = user.actions

export default user;