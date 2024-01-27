import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUpdateTodo, getTodosSuccess } from "../reducers/todoReducer";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (todo, { dispatch }) => {
    try {
      /**
       * here we can call apis
       * also we can dispatch reducer slice
       * we can handler backend error as well here
       */
      dispatch(getTodosSuccess(todo));
      return true;
    } catch (error) {
      // here we can catch api not response something wrong
      throw error;
    }
  }
);

export const createTodo = createAsyncThunk(
  "todos/create",
  async (todo, { dispatch }) => {
    console.log(todo);
    try {
      /**
       * here we can call apis
       * also we can dispatch reducer slice
       * we can handler backend error as well here
       */
      dispatch(addUpdateTodo(todo));
      return true;
    } catch (error) {
      // here we can catch api not response something wrong
      throw error;
    }
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggle",
  async (todo, { dispatch }) => {
    try {
      /**
       * here we can call apis
       * also we can dispatch reducer slice
       * we can handler backend error as well here
       */

      dispatch(toggleTodo(todo));
      return true;
    } catch (error) {
      // here we can catch api not response something wrong
      throw error;
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (id, { dispatch }) => {
    try {
      /**
       * here we can call apis
       * also we can dispatch reducer slice
       * we can handler backend error as well here
       */
      dispatch(deleteTodo(id));
      return true;
    } catch (error) {
      // here we can catch api not response something wrong
      throw error;
    }
  }
);
