import React, { useState } from "react";
import "./styles.scss";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import EditTask from "./components/EditTask";
import { Util } from "../../Helper/Util";

function Todo(props) {
  const inititems = [
    {
      name: "Aflreds Futterkiste",
      status: "new",
    },
    {
      name: "bbbb",
      status: "depending",
    },
    {
      name: "vvv",
      status: "new",
    },
  ];
  const [valueInput, setValueInput] = useState({
    inputTask: "",
    inputEdit: "",
  });

  const [items, setItems] = useState(inititems);
  const handleSubmit = (val) => {
    let task = val.inputTask;
    let item = [...items];
    let schema = {
      name: task,
      status: "new",
    };
    item.push(schema);
    setItems(item);
    setValueInput({
      ...valueInput,
      inputTask: "",
    });
  };

  const handleStatus = (index, status) => {
    let item = [...items];
    item[index].status = status;
    setItems(item);
  };
  const handleDelete = (index) => {
    let item = [...items];
    item.splice(index, 1);
    setItems(item);
  };

  const handleEdit = (index) => {
    setValueInput({
      ...valueInput,
      inputEdit: items[index].name,
      indexEdit: index,
    });
    setIsOpenEdit(!isOpenEdit);
  };

  const getValFilter = (val) => {
    let item = [...items];
    let { valSearch, valSelect } = val;
    console.log(val);
    let result = item.filter((i) => {
      return i.status.toLocaleLowerCase().includes(valSelect);
    });
    setItems(result);
  };

  const handleSaveEdit = (value) => {
    let item = [...items];
    let index = valueInput.indexEdit;
    item[index].name = value;
    setItems(item);
    setIsOpenEdit(!isOpenEdit);
  };

  const [isOpenEdit, setIsOpenEdit] = useState(true);
  const handleCloseEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <AddTask handleSubmit={handleSubmit} />
      <Task
        handleStatus={handleStatus}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        getValFilter={getValFilter}
        items={items}
      />
      <EditTask
        isOpenEdit={isOpenEdit}
        valueEdit={valueInput.inputEdit}
        handleSaveEdit={handleSaveEdit}
        handleCloseEdit={handleCloseEdit}
      />
    </div>
  );
}

export default Todo;
