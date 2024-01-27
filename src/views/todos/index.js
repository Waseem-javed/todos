import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { TodoSelector } from "../../redux/reducers/todoReducer";
import { getTodos } from "../../redux/actions/todoAction";

const Todos = () => {
  const [dataSet, setDataSet] = useState({
    id: Date.now(),
    text: "",
    completed: false,
  });
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const ITodoState = useSelector(TodoSelector);

  const { todos } = ITodoState;

  useEffect(() => {
    if (!todos) {
      dispatch(getTodos());
    }
  }, [todos, dispatch]);

  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card shadow-sm" style={{ borderRadius: "15px" }}>
              <div class="card-body p-5">
                <h6 class="mb-3 mx-auto text-primary">Todo App</h6>

                <TodoForm
                  edit={edit}
                  dataSet={dataSet}
                  setDataSet={setDataSet}
                />
                <TodoList
                  todos={todos}
                  setEdit={setEdit}
                  setDataSet={setDataSet}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todos;
