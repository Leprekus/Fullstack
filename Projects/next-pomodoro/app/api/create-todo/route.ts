import { Todo } from '@/lib/Todo'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    const item: Todo = await request.json()
    return NextResponse.json({ item })
}
