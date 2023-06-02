import './App.css';
import { useState } from "react";
import ToDoList from './toDoList';
import ToDoInput from './toDoInput';

function App() {
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
    <div classname="App">
      <h1>TO DO APP</h1>
      <ToDoInput toDo={todo} setToDo={setTodo} addToDo={addTODO} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
    </div>


  );
}

export default App;
