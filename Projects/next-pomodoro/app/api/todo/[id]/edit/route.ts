import { Todo } from '@/lib/Todo'
import { NextResponse } from 'next/server'


export async function PATCH(request: Request) {
    //TODO: handle edition
    const item: Partial<Todo> = await request.json()
    return NextResponse.json({ item })
}
