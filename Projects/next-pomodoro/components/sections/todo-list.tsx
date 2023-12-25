'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import TodoCard from '../card/todo-card';

export default function TodoList() {
    const [todos, setTodos] = useState<(typeof TodoCard)[]>([]);
    const addTodo = () => {
        setTodos((prev) => [...prev, TodoCard]);
    };

    if (todos.length === 0)
        return (
            <div
                className="
                w-96
                h-10
                hover:bg-gray-100
                rounded-md
                text-gray-400
                transition
                cursor-pointer
                flex
                items-baseline"
                onClick={addTodo}
            >
                <div className="flex my-auto">
                    <Plus /> NEW
                </div>
            </div>
        );
    return (
        <>
            {todos.map((Item, i) => (
                <Item key={i} handleOnClick={addTodo} />
            ))}
        </>
    );
}
