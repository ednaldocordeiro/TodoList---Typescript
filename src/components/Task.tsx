import { Trash } from "phosphor-react"
import { useState } from "react"
import { Task } from "../App";
import styles from '../styles/TaskItem.module.css'

interface TaskItem {
  finishTask: (selectedTask: Task) => void;
  task: Task;
  onDelete: (task: Task) => void;
}

export function TaskItem({finishTask, task, onDelete}: TaskItem) {  

  return (
    <div className={styles.task}>
      <input 
        type="checkbox"
        onChange={() => {
          finishTask(task)
        }}
        checked={task.finished} 
      />
      <span className={task.finished ? styles.finished : ''}>{task.title}</span>
      <button
        onClick={() => onDelete(task)}
      >
        <Trash size={20}/>
      </button>
    </div>
  )
}