import { createSlice, PayloadAction } from '@reduxjs/toolkit';




export type UserState = {
    id?: number,
    name?: string,
    tasknumber?: number,
    complete?: number,
    tasks: string[],
};
const users = JSON.parse(localStorage.getItem("users") as string);

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
            const id = state.id;
            state.tasks = [action.payload, ...state.tasks]
            users[id as number].tasks = state.tasks
            localStorage.setItem("users", JSON.stringify(users));
        },
        DeleteTask(state, action: PayloadAction<number>) {
            const id = state.id;
            state.tasks = [...state.tasks.slice(0, action.payload),
            ...state.tasks.slice(action.payload + 1),]
            users[id as number].tasks = state.tasks
            localStorage.setItem("users", JSON.stringify(users));
        },
        AddComplete(state, action: PayloadAction<number>) {
            const id=state.id
            state.complete = state.complete as number + action.payload
            users[id as number].complete = state.complete
            localStorage.setItem("users", JSON.stringify(users));
        },
        ChangeUserId(state, action: PayloadAction<number>) {
            const NewUser: UserState = {
                id: users[action.payload].id,
                name: users[action.payload].name,
                tasknumber: users[action.payload].tasknumber,
                complete: users[action.payload].complete,
                tasks: users[action.payload].tasks,
            }
            return NewUser;

        },
    },
})

export const { AddTask, DeleteTask, ChangeUserId, AddComplete } = user.actions

export default user;