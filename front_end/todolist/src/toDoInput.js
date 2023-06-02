function ToDoInput(props){
    const {toDo, addToDo, setToDo} = props;

    return(
        <div classname="input-wrapper">
        {/* <input type="text" name="todo" placeholder="Add a tas k"/> */}
        <input
          type="text"
          name="todo"
          value={toDo}
          placeholder="Add a task"
          onChange={(e) => {
            setToDo(e.target.value);
          }}
        />
        <button classname="add-button" onClick={addToDo}>ADD</button>
      </div>
    )
}

export default ToDoInput;