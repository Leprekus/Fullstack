import { Todo } from '@/lib/Todo'
import { NextResponse } from 'next/server'


export async function DEL(request: Request) {
    //TODO: handle deletion
    const item: Todo = await request.json()
    return NextResponse.json({ item })
}
