import { useContext } from "react"
import TaskContext from "../taskContext"
import TaskItem from "./TaskItem"

export default function TaskList() {

  const {taskList, updateTask, addTask, deleteTask} = useContext(TaskContext);
  return (
    <div className="taskListDiv">
      <ul className="taskList">
      {taskList.map((task, i) => <TaskItem key={i} task={task} />)}
    </ul>
    </div>
  )
}
