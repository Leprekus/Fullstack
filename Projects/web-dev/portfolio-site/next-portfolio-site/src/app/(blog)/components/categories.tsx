'use client'
import { usePathname, useRouter } from 'next/navigation'
interface CategoriesProps {
    categories: {
        title: string;
        description: string;
        _id: string;
        slug: { current: string; }
    }[]
}
export default function Categories({ categories }: CategoriesProps) {
    const router = useRouter()
    const pathname = usePathname()

    if(pathname !== '/blog') return null
  return (
    <div className=''>
        <p className='font-semibold'>Categories</p>
    {categories.map(category =>(
        <button
        onClick={() => router.push(`/blog/${category.slug.current}`)}
        className='
            transition
            bg-gray-950
            hover:bg-gray-900
            text-white
            rounded-full
            px-4
            py-1
            mx-0.5
            my-1
        '
        key={category._id}>
          { category.title}
        </button>
      ))}
    </div>
  )
}