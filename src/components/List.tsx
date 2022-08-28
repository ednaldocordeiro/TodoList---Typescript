import { EmptyList } from "./EmptyList"
import styles from '../styles/List.module.css';

import { Task } from '../App'
import { TaskItem } from "./Task";

interface ListProps {
  tasks: Task[],
  onFinished: (selectedTask: Task) => void;
  onDelete: (selectedTask: Task) => void;
}

export function List({ tasks, onFinished, onDelete }: ListProps) {

  const finishedTasks = tasks.filter(task => task.finished === true && task)

  return (
    <div className={styles.list}>
      <header>
        <div>
          <strong className={styles.created}>Tarefas criadas</strong>
          <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div>
          <strong className={styles.finished}>Tarefas concluídas</strong>
          <span className={styles.counter}>{finishedTasks.length === 0 ? 0 : `${finishedTasks.length} de ${tasks.length}`}</span>
        </div>
      </header>
      <div>
        {tasks.length === 0 ? 
          <EmptyList /> : 
          tasks.map((task) => (
            <TaskItem 
              key={task.title} 
              task={task}
              finishTask={() => onFinished(task)}
              onDelete={onDelete}
            />
          ))
        }
      </div>
    </div>
  )
}