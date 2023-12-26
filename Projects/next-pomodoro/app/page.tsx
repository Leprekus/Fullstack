"use client"

import TodoCard from '@/components/card/todo-card'
import List from '@/components/list'


export default  function Home() {
  
  return (
    <>
      <List Component={<TodoCard/>}/>
    </>
  )
}

