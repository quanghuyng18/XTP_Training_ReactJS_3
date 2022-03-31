import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Todo.propTypes = {};

function Todo(props) {
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <div className="todo__add add">
        <div className="add__title">Add a task</div>
        <div className="add__content content">
          <p className="content__title">item</p>
          <input
            className="content__input-todo"
            placeholder="What do you wants to do?"
            name="inputTask"
          ></input>
          <p className="content__note">Enter what you want to procastinate </p>
          <button className="content_submit btn btn--primary pointer">
            Submit
          </button>
        </div>
      </div>
      <div className="todo__task task">
        <div className="task__title">Task</div>
        <div className="task__content content">
          <table className="task__table table">
            <thead>
              <tr>
                <th>Items </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task1</td>
                <td>New</td>
                <td>
                  <button className="btn btn--primary mr-15 pointer">
                    New
                  </button>
                  <button className="btn btn--primary mr-15 pointer">
                    Depending
                  </button>
                  <button className="btn btn--primary mr-15 pointer">
                    Complete
                  </button>
                  <button className="btn btn--primary mr-15 pointer">
                    Edit
                  </button>
                  <button className="btn btn--secondary mr-15 pointer">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todo;
