import React, { useState } from "react";
import PropTypes from "prop-types";

AddTask.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function AddTask(props) {
  const [valueInput, setValueInput] = useState({
    inputTask: "",
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    props.handleSubmit(valueInput);
    setValueInput({
      ...valueInput,
      inputTask: "",
    });
  };
  return (
    <div className="todo__add add">
      <div className="add__title">Add a task</div>
      <div className="add__content content">
        <p className="content__title">item</p>
        <input
          className="content__input-todo"
          placeholder="What do you wants to do?"
          name="inputTask"
          value={valueInput.inputTask}
          onChange={handleInput}
        ></input>
        <p className="content__note">Enter what you want to procastinate </p>
        <button
          className="content_submit btn btn--primary pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddTask;
