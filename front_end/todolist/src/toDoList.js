
function ToDoList(props) {

    function deleteItem(key, toDoList, setToDoList) {
        var newtoDoList = []
        for (var i = 0; i<toDoList.length;i++) {
            if (toDoList[i][0] != key) {
                newtoDoList.push(toDoList[i])
            }
        }

        setToDoList(newtoDoList)
    }

    return (
        <div class="todo">
            {props.toDoList?.length > 0 ? (<ul class="todo-list">
                {props.toDoList.map(
                    
                    todo =><li key={todo[0]}>{todo[1]}{' '}
                    <button class="delete-button" onClick={() => {deleteItem(todo[0], props.toDoList, props.setToDoList)}}>Delete</button>
                    </li>
                )}
            </ul>): (<div class="empty">No tasks</div>)}
        </div>
    )
};

export default ToDoList