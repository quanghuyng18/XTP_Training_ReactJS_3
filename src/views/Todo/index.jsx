import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Person from "./components/Person";

Todo.propTypes = {};
const listStudent = [
  {
    id: 1,
    name: "name1",
    points: {
        math: '9',
        english: '5',
        history: '3'
    }
  },
  {
    id: 2,
    name: "name2",
    points: {
        math: '9',
        english: '5',
        history: '3'
    }
  },
  {
    id: 3,
    name: "name3",
    points: {
        math: '9',
        english: '5',
        history: '3'
    }
  },
];



function Todo(props) {
  const name = "Teset";
  const hello = (name) => {
    return `Xin chao: ${name}`;
  };

  return (
    <>
      <div className="content">
        <h1>Todos: {name}</h1>
        <h1>Todos: {hello("XTP")}</h1>
      </div>
      <div className="ex-jsx">
        JSX:
        <h2>List Todo:</h2>
        {listStudent.map(item=>{
            return(
                <Person item={item}/>
            )
        })}


        <h2>Component, props</h2>
        
      </div>

      <div className="tab-1">
        <div className="tab-1-content-1">
          <p>Add a task</p>
        </div>
        <div className="tab-1-content-2">
          <p>Item</p>
          <input type="text" placeholder="What do you want to do ?" />
          <span>Enter what you want to procastinate😘</span>
          <button>Submit</button>
        </div>
      </div>

      <div className="tab-2">
        <div className="tab-2-content-1">
          <p>Tasks</p>
        </div>

        <div className="tab-2-content-2">
          <div className="row bold">
            <div className="row-1">Item</div>
            <div className="row-2">Status</div>
            <div className="row-3">Action</div>
          </div>
          <div className="row">
            <div className="row-1">Buy Benz</div>
            <div className="row-2">Not Completed</div>
            <div className="row-3">
              <button className="blue">Complete</button>
              <button className="red">Delete</button>
            </div>
          </div>

          <div className="row">
            <div className="row-1">Downgrade Macbook to Mojave</div>
            <div className="row-2">Not Completed</div>
            <div className="row-3">
              <button className="blue">Complete</button>
              <button className="red">Delete</button>
            </div>
          </div>
          <div className="row">
            <div className="row-1">Buy more food</div>
            <div className="row-2">Not Completed</div>
            <div className="row-3">
              <button className="blue">Complete</button>
              <button className="red">Delete</button>
            </div>
          </div>

          <div className="row">
            <div className="row-1">Make more money</div>
            <div className="row-2">Not Completed</div>
            <div className="row-3">
              <button className="blue">Complete</button>
              <button className="red">Delete</button>
            </div>
          </div>

          <div className="row">
            <div className="row-1">Buy Dollars</div>
            <div className="row-2">Not Completed</div>
            <div className="row-3">
              <button className="blue">Complete</button>
              <button className="red">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
