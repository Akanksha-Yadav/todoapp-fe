import './App.css';
import { useState, useEffect } from "react";
import ToDoList from './toDoList';
import ToDoInput from './toDoInput';
import { createItem } from './itemservice';
import { readItem } from './readitems';

function App() {
  const [todo, setTodo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  // const [id, setId] = useState(0);
  const [error, setError] = useState("");

  function addTODO() {
    if (todo !== "") {
      createItem(todo).then(response => {
        if (response) {
          var newItem = [response.id, response.title]
          // toDoList.push([response.id, response.title]);
          setToDoList([...toDoList, newItem])
          // // toDoList.push([id, todo]);
          //  setToDoList(toDoList)
          // // setId(id + 1)
          // setTodo("")
        }
        else {
          setError("item not added")
        }

      })

    }

    setTodo("")

  };

  //   if (todo !== "") {
  //     toDoList.push([id, todo]);
  //     setToDoList(toDoList)
  //     setId(id + 1)
  //   }
  //   setTodo("")
  // }

  return (
    <div classname="App">
      <h1>TO DO APP</h1>
      <ToDoInput toDo={todo} setToDo={setTodo} addToDo={addTODO} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      {error}
    </div>


  );
}

export default App;
