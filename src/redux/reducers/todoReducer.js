import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todosLoading: false,
};

const todosSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    getTodosSuccess: (state, { payload }) => {
      state.todos = payload;
      state.todosLoading = false;
    },
    addUpdateTodo: (state, { payload }) => {
      if (payload.id) {
        state.todos = state.todos.filter((t) => {
          return t.id !== payload.id;
        });
      }
      state.todos = state.todos ? [payload, ...state.todos] : [payload];
    },
    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.filter((to) =>
        to.id === payload.id
          ? {
              id: payload.id,
              text: payload.text,
              completed: !payload.completed,
            }
          : to
      );
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((to) => to.id !== payload);
    },
  },
});

export const { getTodosSuccess, addUpdateTodo, toggleTodo, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;

export const TodoSelector = (state) => {
  return state.todo;
};
