import { useState, useEffect } from "react";
import { readItem } from "./service_components/readitems";
import { deleteItem } from "./service_components/delete_item";


function ToDoList(props) {

    useEffect(() => {
        readItem().then(response => {
            if (response) {
                var defaultToDoList = []
                for (var i = 0; i < response.length; i++) {
                    defaultToDoList.push([response[i].id, response[i].title]);
                }
                props.setToDoList(defaultToDoList);
                // toDoList.push([id, todo]);

                // setId(id + 1)
                // setTodo("")
            }
        })
    }, []);

    function removeItem(key, toDoList, setToDoList) {
        var newtoDoList = []
        for (var i = 0; i < toDoList.length; i++) {
            if (toDoList[i][0] != key) {
                newtoDoList.push(toDoList[i])
            }
        }
        deleteItem(key).then(deleted => {
            if (deleted) {
                setToDoList(newtoDoList)
                
            }
        })
        
    }

    return (
        <div class="todo">
            {props.toDoList?.length > 0 ? (<ul class="todo-list">
                {props.toDoList.map(

                    todo => <li key={todo[0]}>{todo[1]}
                        <button class="delete-button" onClick={() => { removeItem(todo[0], props.toDoList, props.setToDoList) }}>Delete</button>
                    </li>
                )}
            </ul>) : (<div class="empty">No tasks</div>)}
        </div>
    )
};

export default ToDoList