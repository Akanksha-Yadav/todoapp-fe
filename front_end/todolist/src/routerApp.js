import './App.css';
import { useState } from "react";
import ToDoList from './toDoList';
import ToDoInput from './toDoInput';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import App from './App';
import Navigation from './navigation';

function RouterApp() {
  const [todo, setTodo] = useState("");
  const [toDoList,setToDoList] = useState([]);
  const [id, setId] = useState(0);

  function addTODO() {
    if (todo !== "") {
      toDoList.push([id, todo]);
      setToDoList(toDoList)
      setId(id + 1)
    }
    setTodo("")
  }

  return (
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Navigation></Navigation>} />
            <Route index element={<Navigation></Navigation>} />
            <Route path="login" element={<Login/>}/>
            <Route path="app" element={<App />} />
        </Routes>
      </BrowserRouter>
  );
}

export default RouterApp;
