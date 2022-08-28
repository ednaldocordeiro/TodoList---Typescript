import './global.css'
import {Header} from './components/Header'
import { List } from './components/List'
import { useState } from 'react'

export interface Task {
  id: number,
  title: string,
  finished: boolean,
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  function handleCreateTask(task: Task) {
    task.title !== '' && setTasks([...tasks, task])
  }

  function handleFinishTask(selectedTask: Task) {
    const newTaskValues = tasks.map(task => task === selectedTask ? {
      ...task,
      finished: !task.finished,
    } : task);
    setTasks(newTaskValues);
  }

  function handleDeleteTask(selectedTask: Task) {
    const newTasks = tasks.filter(task => task !== selectedTask && task)
    setTasks(newTasks);
  }

  return (
    <>
      <Header 
        onCreateTask={handleCreateTask}
      />
      <main>
        <List 
          tasks={tasks}
          onFinished={handleFinishTask}
          onDelete={handleDeleteTask}
        />
      </main>
    </>
  )
}

export default App
