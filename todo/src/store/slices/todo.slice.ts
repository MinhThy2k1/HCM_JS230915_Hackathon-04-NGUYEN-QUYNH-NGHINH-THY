import { createSlice } from "@reduxjs/toolkit";

export type todo = {
    id: number;
    name: string;
    status: string;
}
interface InitState {
    list: todo[] | null,

}
let initialState: InitState = {
    list: [],

}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.list = action.payload;
        },
        addTodo: (state, action) => {
            state.list?.push(action.payload);
        },
        toggleComplete: (state, action) => {
            if (state.list !== null) {
                state.list = state.list.map((todo) => {
                    if (todo.id == action.payload.id) {
                        return action.payload;
                    }
                    return todo;
                });
            }
        },
        delete: (state, action) => {
            if (state.list !== null) {
                state.list = state.list.filter((todo) => todo.id !== action.payload);
            }
        }
    }
})
export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions;