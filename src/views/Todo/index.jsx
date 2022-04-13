import React, { useEffect, useState } from 'react';
import './styles.scss';
import AddTask from './components/AddTask';
import Task from './components/Task';
import EditTask from './components/EditTask';
import tasksApi from '../../api/tasksApi';

function Todo(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    tasksApi.getAll().then((res) => setItems(res.data));
  }, []);

  const [valueInput, setValueInput] = useState({
    inputTask: '',
    inputEdit: '',
  });

  const handleSubmit = async (val) => {
    let task = val.inputTask;
    let schema = {
      name: task,
      status: 'new',
    };
    await tasksApi
      .add(schema)
      .then((res) => alert('hello'))
      .catch((e) => alert('create bad'));
    await tasksApi.getAll().then((res) => setItems(res.data));
  };

  const handleStatus =async (id, status) => {
    await tasksApi.update(id, { status: status });
    await tasksApi.getAll().then((res) => setItems(res.data));
  };
  const handleDelete = async (id) => {
    await tasksApi.remove(id);
    await tasksApi.getAll().then((res) => setItems(res.data));
  };

  const handleOpenEdit = async (id) => {
    await tasksApi.get(id).then((res) =>
      setValueInput({
        ...valueInput,
        inputEdit: res.data.name,
        idElementEdit: id,
      })
    );
    setIsOpenEdit(!isOpenEdit);
  };

  const handleSaveEdit = async (value) => {
    await tasksApi.update(valueInput.idElementEdit, { name: value });
    await tasksApi.getAll().then((res) => setItems(res.data));
    setIsOpenEdit(!isOpenEdit);
  };

  const [isOpenEdit, setIsOpenEdit] = useState(true);
  const handleCloseEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  const handleGetValFilter = (val) => {
    const valSearch = {
      name_like: val.valSearch,
      status_like: val.valSelect,
    };
    tasksApi.getAll(valSearch).then((res) => setItems(res.data));
  };
  return (
    <div className="todo">
      <div className="todo__title">Todos</div>
      <AddTask handleSubmit={handleSubmit} />
      <Task
        handleStatus={handleStatus}
        handleEdit={handleOpenEdit}
        handleDelete={handleDelete}
        handleGetValFilter={handleGetValFilter}
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
