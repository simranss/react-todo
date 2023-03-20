import { useContext, useRef } from "react"
import TaskContext from "../taskContext"

export default function InputTask() {
  const {taskList, updateTask, addTask, deleteTask} = useContext(TaskContext);
  const inputRef = useRef();

  return (
    <div>
      <form>
        <input ref={inputRef} autoFocus className="input" type="text" />
        <button type="submit" className="button buttonadd" onClick={(e) => {
          let taskName = inputRef.current.value;
          let key = new Date().getTime();
          if (taskName.length > 0) {
            let newTask = {task: taskName, checked: false, isEditing: false, id: key};
            console.log(newTask);
            addTask(newTask);
          } else {
            alert('Enter a task-name to add a new task');
          }
        }}>+</button>
      </form>
    </div>
  );
}
