import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import userApi from '../api/userApi';

const plusFive = (num) => {
  console.log('i was called!');
  return num + 5;
};

export default function Test() {
  useEffect(() => {
    userApi.getAll().then((res) => {
      console.log(res.data);
    });
    const dataCreate = {
        "name": "xtp-training",
        "status": "new"    
    }
    axios.get('https://api-fake-todo.herokuapp.com/api/tasks').then((res) => console.log("all",res.data));
    axios.get('https://api-fake-todo.herokuapp.com/api/tasks/050533').then((res) => console.log("item",res.data));
    axios.post('https://api-fake-todo.herokuapp.com/api/tasks', dataCreate).then((res) => console.log("create",res.data));
    axios.put('https://api-fake-todo.herokuapp.com/api/tasks/050533', dataCreate).then((res) => console.log("update",res.data));
    axios.delete('https://api-fake-todo.herokuapp.com/api/tasks/050533').then((res) => console.log("delete",res.data));

    // const dateGetAll = await axios.get('https://api-fake-todo.herokuapp.com/api/tasks');
    // console.log(dateGetAll.data);
  }, []);
  console.log('hello');

  return <div></div>;
}
