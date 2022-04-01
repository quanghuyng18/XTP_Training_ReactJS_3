import React, { useState } from 'react';
import './styles.scss';
import AddTask from './components/AddTask';
import Task from './components/Task';
import EditTask from './components/EditTask';
import Random from '../../Helper/Random';

function Todo(props) {
  const inititems = [
    {
      id: '123124',
      name: 'Aflreds Futterkiste',
      status: 'new',
      time: '1648734546083',
    },
    {
      id: '123134',
      name: 'bbbb',
      status: 'depending',
      time: '1648734546084',
    },
    {
      id: '122124',
      name: 'vvv',
      status: 'new',
      time: '1648734546085`',
    },
  ];
  const [valueInput, setValueInput] = useState({
    inputTask: '',
    inputEdit: '',
  });

  const [items, setItems] = useState(inititems);
  const handleSubmit = (val) => {
    let task = val.inputTask;
    let item = [...items];
    let schema = {
      id: Random.number(6),
      name: task,
      status: 'new',
      time: new Date().getTime(),
    };
    item.push(schema);
    setItems(item);
  };

  const handleStatus = (id, status) => {
    let item = [...items];
    let index = item.findIndex((item) => item.id === id);
    item[index].status = status;
    setItems(item);
  };
  const handleDelete = (id) => {
    let item = [...items];
    let index = item.findIndex((item) => item.id === id);
    item.splice(index, 1);
    setItems(item);
  };

  const handleOpenEdit = (id) => {
    let item = [...items];
    let index = item.findIndex((item) => item.id === id);
    setValueInput({
      ...valueInput,
      inputEdit: items[index].name,
      idElementEdit: id,
    });
    setIsOpenEdit(!isOpenEdit);
  };

  const handleSaveEdit = (value) => {
    let item = [...items];
    let index = item.findIndex((item) => item.id === valueInput.idElementEdit);
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
      <Task handleStatus={handleStatus} handleEdit={handleOpenEdit} handleDelete={handleDelete} items={items} />
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
