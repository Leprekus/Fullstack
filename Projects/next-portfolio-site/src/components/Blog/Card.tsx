
import { urlFor } from '@/lib/SanityClient'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from './Author'

export default function Card({ post }: { post : IBlogPost }) {

  return (
    <div key={post._id} 
    className='
    border 
    text-gray-600 
    transition-all 
    shadow
    w-full
    h-fit 
    rounded-md 
    hover:cursor-pointer 
    flex 
    flex-col 
    items-center
    
    md:w-72 
    '>
      <div className='bg-zinc-100 min-w-full h-14 flex items-center justify-center border-b'>
        <Link href={'/blog/' + post.slug.current} className='hover:bg-gray-100 transition-all px-4 py-2 rounded-md h-fit'>
        {post.title}
        </Link>
      </div>
     <Link href={`/blog/${post.categories[0].slug.current}/${post.slug.current}`} className='relative min-w-full h-32'>
        <div className='
          min-w-full 
          min-h-full
        hover:bg-black/60 
          hover:opacity-100
          opacity-0
          absolute 
          z-50
          flex 
          items-center 
          justify-center
          transition
       '>
          <p className='text-white font-semibold'>{ post.title }</p>
        </div>
       <Image src={urlFor(post.mainImage.asset._ref)} 
        className='object-cover'
       fill
       alt='post-thumbnail' />
     </Link>
    <Author post={post}/>
      
  </div>
  )
}
