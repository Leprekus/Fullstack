import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories = async(): Promise<Category[]> => {
    const res = await fetch(URL)
    return await res.json()
}

export const getCategory = async(id: string): Promise<Category> => {

    const res = await fetch(`${URL}/${id}`)
    return await res.json()
}
