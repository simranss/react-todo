import { useContext, useRef, useState } from "react";
import TaskContext from "../taskContext";

function TaskItem(props) {
    
    var task = props.task;
    var taskName = task.task;
    var checked = task.checked;
    var id = task.id;
    var isEditing = task.isEditing;

    console.log(checked);

    const {taskList, updateTask, addTask, deleteTask} = useContext(TaskContext);
    const inputRef = useRef();

    const editTask = () => {
        isEditing = !isEditing;
        let previousTask = task;
        let newTask = {...previousTask, isEditing: isEditing};
        console.log(newTask);
        updateTask(id, newTask);
    };

    const saveTask = () => {
        isEditing = !isEditing;
        taskName = inputRef.current.value;
        if (taskName.length > 0) {
            let previousTask = task;
            let newTask = {...previousTask, task: taskName, isEditing: isEditing};
            console.log(newTask);
            updateTask(id, newTask);
          } else {
            alert('Enter a task-name to add a new task');
          }
    };

    return (
        <li key={id}>
            <TaskItemLeft />
            <TaskItemRight />
        </li>
    );

    function TaskItemLeft() {
        
        return (
            (isEditing) ? 
            <div>
                <span></span>
                <input type="text" autoFocus className="editinput" ref={inputRef} defaultValue={taskName} />
            </div> : 
            <div>
                <input id={id} type="checkbox" value={taskName} defaultChecked={checked} onChange={(e) => {
                    checked = !checked;
                    console.log('checked: ' + checked + ', id: ' + id);
                    let previousTask = task;
                    let newTask = {...previousTask, checked: checked};
                    console.log(newTask);
                    updateTask(id, newTask);
                }} />
                <label htmlFor={id}>{taskName}</label>
            </div>
        );
    }
    
    function TaskItemRight() {
        return (
            <div>
                {(isEditing) ? <button className="button buttonsave" onClick={(e) => saveTask()}>Save</button> : <button className="button buttonedit" onClick={(e) => editTask()}>Edit</button>}
                <button className="button buttondel" onClick={(e) => deleteTask(task)}>Delete</button>
            </div>
        );
    }
}

export default TaskItem;