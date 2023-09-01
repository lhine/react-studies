import { useState, ChangeEvent } from 'react'
import Task from './components/Task'
import './style/_css/style.css'

function App() {
  const [todoList, setTodoList] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask.length) {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      }
      setTodoList([...todoList, task])
    }
  }

  return (
    <div className="App">
      <section className="App_addTask">
        <div className="nes-field">
          <input
            type="text"
            id="new_task_field"
            className="nes-input"
            onKeyDown={handleKeyPress}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="nes-btn is-primary" onClick={addTask}>
          Add
        </button>
      </section>

      <section className="App_listOfTasks">
        <div className="App_listOfTasks_firstColumn">
          <div className="nes-container with-title is-centered">
            <p className="title">Mamma Mia!</p>

            {todoList.length === 0 ? (
              <p>Please add an item</p>
            ) : (
              <p>This is a To Do list with really bad code</p>
            )}
          </div>

          <i className="nes-mario"></i>
        </div>

        {todoList.length > 0 && (
          <div className="App_listOfTasks_secondColumn">
            {todoList.map((task) => (
              <Task
                key={task.id}
                task={task}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default App
