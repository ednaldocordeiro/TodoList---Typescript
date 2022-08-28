import logo from '../assets/Logo.svg'
import styles from'../styles/Header.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'

import { Task } from '../App'

interface HeaderProps {
  onCreateTask: (task: Task) => void;
}

export function Header({ onCreateTask }: HeaderProps) {

  const [taskName, setTaskName] = useState('')

  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' className={styles.logo}/>
      <div className={styles.container}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          onClick={() => 
            {
              onCreateTask({
                id: Math.floor(Math.random() * 100),
                title: taskName, 
                finished: false
              })
              setTaskName('')
            }}
        >
          Criar <PlusCircle />
        </button>
      </div>
    </header>
  )
}