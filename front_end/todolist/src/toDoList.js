import { useState } from "react";

function ToDoList(props) {
    const [newtoDoList,setnewtoDoList] = useState([]);
    function ToDelete(key){
               {props.toDoList.map(
                   todo =>{
                   if(todo[0]!== key)
                   {
                        newtoDoList.push([todo[0],todo[1]]);
                        setnewtoDoList(newtoDoList)
                   }
                }
               )}
            props.setToDoList([])
            console.log(newtoDoList);
            {newtoDoList.map(
                todo =>{ props.toDoList.push([todo[0],todo[1]])
                //props.setToDoList(props.ToDoList)
               }
            )}
            props.setToDoList(props.ToDoList)
            console.log(props.toDoList);
            setnewtoDoList([])   
            console.log(newtoDoList);
    }
    


    return (
        <div>
            {props.toDoList?.length > 0 ? (<ul className="todo-list">
                {props.toDoList.map(
                    todo => <li key={todo[0]}>{todo[1]}
                   
                    <button classname="delete-button" onClick={() => {ToDelete(todo[0])}}>Delete</button>
                    </li>
                )}
            </ul>): (<div>No tasks</div>)}
        </div>
    )
};

export default ToDoList