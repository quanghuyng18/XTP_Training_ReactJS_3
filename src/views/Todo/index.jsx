import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { computeHeadingLevel } from "@testing-library/react";

Todo.propTypes = {};

function Todo(props) {
  const [color, setColor] = useState("green");
  const [name, setName] = useState("");

  const [texts, setTexts] = useState([
    {id: "123", name: "task1", status: false },
    {id: "312", name: "task2", status: true },
  ]);

  const addSaveText = () => {
    const text = [...texts];
    if(indexEdit===""){
      const schema = {
        name: name,
        status: false,
      };
      text.push(schema);
    }else{
      const valEdit = text[indexEdit].name;
      setName(valEdit);
      text[indexEdit].name=name;
    }
    setTexts(text);
  };

  const handleDelete = (index) => {
    const text = [...texts];
    text.splice(index, 1);
    setTexts(text);
  };
  const handleStatus = (index) => {
    const text = [...texts];
    text[index].status = !text[index].status;
    setTexts(text);
  };

  const [indexEdit, setIndexEdit] = useState('')
  const handleEdit =(index)=>{
    setIndexEdit(index);
    const text = [...texts];
    const valEdit = text[index].name;
    setName(valEdit);
  }

  return (
    <div className="todo">
      <div>
        <div style={color === "green" ? { color: "green" } : { color: "red" }}>
          Color: {color}
        </div>
        <div>
          Name:2q
          {texts.map((item, index) => (
            <div key={index}>
              <span>
                {index + 1} - {item.name}::::::
              </span>
              <span style={item.status ? { color: "green" } : { color: "red" }}>
                Trang thai: {item.status ? "complete" : "new"} ::::::{" "}
              </span>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleStatus(index)}>Status</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={addSaveText} >{indexEdit === ''? "AddTask" : "SaveEdit"}</button>
      </div>

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
