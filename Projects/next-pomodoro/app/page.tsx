"use client"

import TodoCard from '@/components/card/todo-card'
import PomodoroTimer from '@/components/pomodoro-timer'
import List from '@/components/ui/list'


export default  function Home() {
  
  return (
    <>
      <PomodoroTimer/>
      <List Component={<TodoCard/>}/>
    </>
  )
}

