"use client"

import TodoCard from '@/components/card/todo-card'
import List from '@/components/ui/list'


export default  function Home() {
  
  return (
    <>
      <List Component={<TodoCard/>}/>
    </>
  )
}

