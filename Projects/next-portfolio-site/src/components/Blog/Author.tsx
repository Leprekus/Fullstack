import { urlFor } from '@/lib/SanityClient'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Author({ post }: { post: IBlogPost }) {
    const url = urlFor(post.author.image.asset._ref)

    return (
    <div className='w-full px-4 py-2'>
    <div className='flex gap-2'>
        <Link href ='/'className='bg-gray-50 hover:bg-gray-100  rounded-full p-1 hover:cursor-pointer transition-all flex items-center justify-center'>
            <Image src={url} width={32} height={32} alt='author-icon'/>
        </Link>
        <Link href='' className='hover:bg-gray-100 transition-all px-4 py-2 rounded-md'>{post.author.name}</Link>
    </div>
    <p className='text-xs pt-1'>{'Edited: ' + post._updatedAt ?? 'Created: ' + post._createdAt}</p>
</div>
  )
}
