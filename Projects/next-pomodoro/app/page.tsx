"use client"
import Image from 'next/image'

export default  function Home() {
  const createTodo = async () =>{

    await fetch('/api/create-todo', {
      method: 'POST',
      body: JSON.stringify({ test: "test" })
    })
  }
  return (
    <>
      
    </>
  )
}

