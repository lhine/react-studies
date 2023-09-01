interface TaskProps {
  task: Task
  todoList: Task[]
  setTodoList: React.Dispatch<React.SetStateAction<Task[]>>
}

const Task = ({ task, todoList, setTodoList }: TaskProps) => {
  const deleteTask = (taskId: number) => {
    setTodoList(todoList.filter((task) => task.id !== taskId))
  }

  return (
    <div className="task">
      <label>
        <input type="checkbox" className="nes-checkbox" />
        <span>{task.taskName}</span>
      </label>

      <button
        type="button"
        className="nes-btn is-error"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  )
}

export default Task
