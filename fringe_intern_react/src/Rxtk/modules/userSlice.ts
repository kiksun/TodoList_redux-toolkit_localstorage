import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';

const users = JSON.parse(localStorage.getItem("users") as string);

export type State = {
    id: number,
    name: string,
    tasknumber: number,
    tasks: string[],
    Dates: string[]
}

const UserState: State = {
    id: 0,
    name: "kimura",
    tasknumber: 1,
    tasks: [],
    Dates: []
}

const user = createSlice({
    name: 'user',
    initialState: UserState,
        reducers: {
            Addtask: (state, action: PayloadAction<HTMLSelectElement>) => ({
                ...state,
            }),
    },
})

const { actions } = user;

export const { Addtask } = actions;



export default user;