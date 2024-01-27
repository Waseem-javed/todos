import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../../../redux/actions/todoAction";

const TodoList = ({ todos, setEdit, setDataSet }) => {
  const dispatch = useDispatch();
  console.log("www");
  const deleteHandler = async (id) => {
    console.log(id);
    await dispatch(deleteTodo(id));
  };

  return (
    <ul class="list-group mb-0">
      {todos?.map((todo, idx) => {
        return (
          <li
            key={idx}
            class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
          >
            <div class="d-flex align-items-center text-primary">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                checked={todo.completed}
                onClick={async () => {
                  dispatch(toggleTodo(todo));
                }}
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </div>
            <button
              onClick={() => [setEdit(true), setDataSet(todo)]}
              className="btn btn-sm bg-white ms-auto"
            >
              <i class="fa fa-pencil text-primary"></i>
            </button>
            <button
              onClick={() => deleteHandler(todo.id)}
              className="btn btn-sm bg-white"
            >
              <i class="fa fa-times text-primary"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
