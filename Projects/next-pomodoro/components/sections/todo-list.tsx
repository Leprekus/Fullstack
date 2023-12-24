'use client'


import { useState } from 'react'
import TodoCard from '../todo-card'

export default function TodoList() {
  const [todos, setTodos] = useState([ TodoCard ])
  const addTodo = () => {
    setTodos( prev => [...prev, TodoCard])
  }
  return (
    <>
      {todos.map((Item, i) =>
        <Item
          key={i}
          handleOnClick={addTodo}
        />
      )}
    </>
  )
}