import React from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../../redux/actions/todoAction";

const TodoForm = (props) => {
  const { edit, dataSet, setDataSet } = props;
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setDataSet((prev) => {
      return { ...prev, text: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (dataSet.text.trim() === "") {
      return;
    }
    dispatch(createTodo(dataSet));
    setDataSet({});
  };

  return (
    <form onSubmit={submitHandler} class="d-flex justify-content-center">
      <div class="form-floating w-100 mb-2">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          value={dataSet.text}
          onChange={onHandleChange}
          placeholder="What you want to?"
        />
        <label for="floatingInput">Todo</label>
      </div>
      <button type="submit" class="btn btn-primary btn-lg ms-2 mb-2">
        {edit ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
