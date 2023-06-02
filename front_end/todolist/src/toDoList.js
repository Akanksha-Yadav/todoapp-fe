
function ToDoList(props) {
    return (
        <div>
            {props.toDoList?.length > 0 ? (<ul className="todo-list">
                {props.toDoList.map(
                    todo => <li key={todo[0]}>{todo[1]}</li>
                )}
            </ul>): (<div>No tasks</div>)}
        </div>
    )
};

export default ToDoList