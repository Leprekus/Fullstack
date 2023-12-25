"use client"

import TodoCard from '@/components/card/todo-card'
import TodoList from '@/components/list'


export default  function Home() {
  
  return (
    <>
      <TodoList Component={TodoCard}/>
    </>
  )
}

