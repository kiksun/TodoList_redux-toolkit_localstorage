import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';

const users = JSON.parse(localStorage.getItem("users") as string);

export type State = {
    Tasks:string[]
}

const ApploudUserState: State = {
    Tasks:[""]
}

const slice = createSlice({
    name: 'change',
    initialState: ApploudUserState,
    reducers: {
        DoneClap: (state, action: PayloadAction<number>) => ({
            ...state,
            clap: state.apploud - 2,
        }),
    },
})

export const { } = slice.actions;

export const store = configureStore({
    reducer: slice.reducer,
})